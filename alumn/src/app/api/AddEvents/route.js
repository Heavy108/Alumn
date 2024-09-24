import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Event from "@/Models/Events"; 

export async function POST(request) {
  try {
    await connect();
    const data = await request.formData();

    // Log all form data
    console.log("Form Data:", Array.from(data.entries()));

    // Get the files and other form data
    const image1 = data.get("file1");
    const image2 = data.get("file2");
    let buffer1, buffer2;

    if (image1) {
      const bytes1 = await image1.arrayBuffer();
      buffer1 = Buffer.from(bytes1);
    }

    if (image2) {
      const bytes2 = await image2.arrayBuffer();
      buffer2 = Buffer.from(bytes2);
    }

    const head = data.get("Event Headline");
    const name = data.get("Speaker Name");
    const position = data.get("Position");
    const venue = data.get("Venue");
    const Title = data.get("Title");
    const description = data.get("description");
    const time = data.get("Time");

    // Check for missing required fields
    // if (!head || !name || !position || !venue || !Title || !description || !time) {
      // throw new Error("Missing required fields");
    // }

    // Save data to the database
    const newEvent = await Event.create({
      Head:head,
      Name:name,
      Position:position,
      Venue:venue,
      Title:Title,
      description:description,
      time:time,
      S_image: buffer1,
      E_image: buffer2,
    });

    console.log("New Event Created:", newEvent);

  

    return NextResponse.json({ success: true, message: "Event created successfully" });
  } catch (error) {
    console.error("Error saving event:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
