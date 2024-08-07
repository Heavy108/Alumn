import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Mentors from "@/Models/Mentor";


export async function POST(request) {
  try {
    await connect();
    const data = await request.formData();
    console.log(data)
   

    const Name = data.get("Name");
    const Alumni_Id = data.get("Alumni ID");
    console.log(Alumni_Id)
    const Email = data.get("Email");
    const Eligibility = data.get("Eligibility");
    const Description = data.get("Description");

    if (!Name || !Alumni_Id || !Email || ! Eligibility || !Description) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }
    // Save data to the database
    await Mentors.create({
      Name: Name,
      Alumni_ID: Alumni_Id,
      Email: Email,
      Eligibility:Eligibility,
      Description: Description
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
