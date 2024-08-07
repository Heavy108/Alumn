import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Donation from "@/Models/Payback";

export async function POST(request) {
  try {
    await connect();
    const data = await request.formData();
    
    console.log('Form Data:', Array.from(data.entries()));

    // Get the file and other form data
    const file = data.get("Attachments");
    let buffer;

    if (file) {
      const bytes = await file.arrayBuffer();
      buffer = Buffer.from(bytes);
    }

    const Name = data.get("Name");
    const Alumni_Id = data.get("Alumni ID");
    const Email = data.get("Email");
    const Transaction_id = data.get("Transaction ID/UPI Reference ID");
    console.log(Transaction_id)
    

    if (!Name || !Alumni_Id || !Email  || !Transaction_id || !buffer) {
      console.error("Validation Error: Missing required fields.");
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    // Save data to the database
    await Donation.create({
      Name: Name,
      Alumni_ID: Alumni_Id,
      Email: Email,
      Transaction_id: Transaction_id,
      
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
