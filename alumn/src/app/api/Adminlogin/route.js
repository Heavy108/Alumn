import { connect } from "@/dbConfig/dbConfig";
import admin from "@/Models/Adminlogin";
import Card from "@/Models/DigitalCard";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    await connect();
    const reqBody = await request.json();
    const { username, password, type } = reqBody;
    console.log(username, password, type, reqBody);
    let userData;

    if (type === "admin") {
      // Find admin in the database
      userData = await admin.findOne({ name: username });
      console.log(userData);
      if (!userData) {
        return NextResponse.json({ error: "Admin not found" }, { status: 404 });
      }
    } else if (type === "student") {
      // Find student in the card model using email (username)
      userData = await Card.findOne({ Email: username.toLowercase() });
      if (!userData) {
        return NextResponse.json({ error: "Student not found" }, { status: 404 });
      }
    }

    // Validate password (admin uses bcryptjs, student uses alumni ID directly as password)
    const validPassword = type === "admin"
      ? await bcryptjs.compare(password, userData.password)
      : password === userData.Alumni_ID;

    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    // Include user type in the token payload
    const token = jwt.sign(
      { id: userData._id, username: userData.username, alumniId: userData.Alumni_ID, type }, 
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const response = NextResponse.json(
      { message: "Login successful", type }, // Send back the user type for frontend routing
      { status: 200 }
    );
    response.cookies.set("token", token, {
      maxAge: 60 * 60, // 1 hour in seconds
      path: "/", // Cookie path
    });

    return response;
  } catch (error) {
    console.error("Login error:", error); // Log the error for debugging
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
