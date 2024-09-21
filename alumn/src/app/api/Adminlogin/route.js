import { connect } from "@/dbConfig/dbConfig";
import admin from "@/Models/Adminlogin";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    await connect();
    const reqBody = await request.json();
    const { username, password } = reqBody;

    // Find admin in the database
    const adminData = await admin.findOne({ name: username });
    if (!adminData) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Validate password
    const validPassword = await bcryptjs.compare(password, adminData.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    // Create a JWT token
    const token = jwt.sign(
      { id: adminData._id, username: adminData.username }, // Payload
      process.env.JWT_SECRET, // Secret key from environment variables
      { expiresIn: "1h" } // Expiry time for the token
    );
    console.log(token)
    // Set the token in an HTTP-only cookie
    const response = NextResponse.json(
      { message: "User Login successfully" },
      { status: 200 }
    );
    response.cookies.set("token", token, {
      httpOnly: true, // Prevent access to the token via JavaScript
      maxAge: 60 * 60, // 1 hour in seconds
      path: "/", // Cookie path
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
