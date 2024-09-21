import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import admin from "@/Models/Adminlogin";
import bcryptjs from "bcryptjs";

export async function POST(request) {
  try {
    // Parse the request body
    await connect();
    const reqBody = await request.json();

    const { username, password } = reqBody;
    console.log(reqBody);

    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create new admin user
    await admin.create({
      name: username,
      password: hashedPassword
    });

    return NextResponse.json({ message: "User added successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error creating user document:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
