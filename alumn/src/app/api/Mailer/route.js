import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Card from "@/Models/DigitalCard";

export async function POST(request) {
  try {
    await connect();
    const reqBody = await request.json();
    const { token } = reqBody;
    console.log("Token received:", token);

    const user = await Card.findOne({ verifyToken: token });
    console.log(user)
    if (!user) {
      console.error("Invalid Token or Token Expired");
      return NextResponse.json({ error: "Invalid Token" }, { status: 400 });
    }

    // console.log("User found:", user);

    user.IsVerified = true;
    user.verifyToken = undefined;
    // user.verifyTokenExpiry = undefined;
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
