import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Gallery from "@/Models/Gallery"; // Assuming you have a Gallery model

export async function POST(request) {
  try {
    await connect();
    const data = await request.formData();

    // Log all form data
    console.log("Form Data:", Array.from(data.entries()));

    // Get the files and other form data
    const imageFile = data.get("image");
    let buffer;

    if (imageFile) {
      const bytes = await imageFile.arrayBuffer();
      buffer = Buffer.from(bytes);
    }

    const caption = data.get("Caption");

    // Check for missing required fields
    if (!caption || !buffer) {
      throw new Error("Missing required fields: Caption and Image are required.");
    }

    // Save data to the database
    const newGalleryEntry = await Gallery.create({
      Caption: caption,
      image: buffer,
    });

    // console.log("New Gallery Entry Created:", newGalleryEntry);

    return NextResponse.json({ success: true, message: "Gallery entry created successfully" });
  } catch (error) {
    console.error("Error saving gallery entry:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
