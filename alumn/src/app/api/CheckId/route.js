import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Card from "@/Models/DigitalCard"; // Assuming you have an Alumni model

export async function GET(request) {
  try {
    await connect();
    const { searchParams } = new URL(request.url);
    const alumniId = searchParams.get("alumniId");

    if (!alumniId) {
      return NextResponse.json(
        { success: false, error: "Alumni ID is required." },
        { status: 400 }
      );
    }

    const alumni = await Card.findOne({ Alumni_ID: alumniId });

    return NextResponse.json({ success: true, exists: !!alumni });
  } catch (error) {
    console.error("Error checking Alumni ID:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
