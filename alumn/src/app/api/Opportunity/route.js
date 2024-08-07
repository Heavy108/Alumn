import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Opp from "@/Models/Opportunity";

export async function POST(request) {
  try {
    await connect();
    const data = await request.formData();
    
    console.log('Form Data:', Array.from(data.entries()));

    // Get the file and other form data
    const file = data.get("Attachment");
    let buffer;

    if (file) {
      const bytes = await file.arrayBuffer();
      buffer = Buffer.from(bytes);
    }

    const Name = data.get("Name");
    const Alumni_Id = data.get("Alumni ID");
    const Email = data.get("Email");
    const Opportunity_Type = data.get("Opportunity Type");
    const Description = data.get("Description");

    if (!Name || !Alumni_Id || !Email || !Opportunity_Type || !Description || !buffer) {
      console.error("Validation Error: Missing required fields.");
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    // Save data to the database
    await Opp.create({
      Name: Name,
      Alumni_ID: Alumni_Id,
      Email: Email,
      Opportunity_Type: Opportunity_Type,
      Description: Description,
      Attachments: buffer,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving document:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
