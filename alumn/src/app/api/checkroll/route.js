// /api/CheckRollNo.js
import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Alumni_det from "@/Models/Alumni";

export async function GET(request) {
  try {
    await connect();
    const { searchParams } = new URL(request.url);
    const rollNo = searchParams.get("rollNo");

    if (!rollNo) {
      return NextResponse.json(
        { success: false, error: "Roll number is required." },
        { status: 400 }
      );
    }

    const student = await Alumni_det.findOne({ Roll_Number: rollNo.toUpperCase() });

    return NextResponse.json({ success: true, exists: !!student });
  } catch (error) {
    console.error("Error checking roll number:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
