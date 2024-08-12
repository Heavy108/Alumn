import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Card from "@/Models/DigitalCard";

export async function POST(request) {
  try {
    await connect();
    const reqBody = await request.json();
    const { token, id } = reqBody;
    console.log("Token and ID received:", token, id);

    // Find user by both ID and token
    const user = await Card.findOne({ _id: id, verifyToken: token });

    if (!user) {
      console.error("Invalid Token, ID, or Token Expired");
      return NextResponse.json({ error: "Invalid Token or ID" }, { status: 400 });
    }

    // Update user verification status
    user.IsVerified = true;
    user.verifyToken = undefined;
    // user.verifyTokenExpiry = undefined; // If you have removed expiry logic

    await user.save();

    console.log("User verified and saved:", {
      uniqueID: user.Alumni_ID,
      name: user.Name,
      passoutYear: user.Passout_Year,
      email: user.Email,
    });

    return NextResponse.json({
      message: "Email verified successfully",
      success: true,
      uniqueID: user.Alumni_ID,
      name: user.Name,
      passoutYear: user.Passout_Year,
      email: user.Email,
    });
  } catch (error) {
    console.error("Server Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
