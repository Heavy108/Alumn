import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Script from "@/Models/Transcript";


export async function POST(request) {
  try {
    await connect();
    const data = await request.formData();
    console.log(data)
   

    const Name = data.get("Name");
    const Alumni_Id = data.get("Alumni ID");
    console.log(Alumni_Id)
    const Email = data.get("Email");
    const Roll = data.get("Roll No");
    const Reason = data.get("Reason");

    if (!Name || !Alumni_Id || !Email || ! Roll || !Reason) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }
    // Save data to the database
    await Script.create({
      Name: Name,
      Roll:Roll,
      Alumni_ID: Alumni_Id,
      Email: Email,
      Reason: Reason
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
