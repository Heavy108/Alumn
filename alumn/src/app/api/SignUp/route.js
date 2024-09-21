
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const { username, password,  } = reqBody;
    console.log(reqBody);


    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    console.log("hisdhifsdif");

   


    console.log("Document written with ID: ", username);
    return NextResponse.json({ message: "User added successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error creating user document:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}