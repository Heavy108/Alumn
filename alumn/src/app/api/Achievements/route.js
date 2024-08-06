import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Carasoul from "@/Models/CarasoulModel";

export async function POST(request) {
  try {
    await connect();
    const data = await request.formData();
    const file = data.get("image");
    let buffer;
    if (file) {
      const bytes = await file.arrayBuffer();
      buffer = Buffer.from(bytes);
    }

    const id = data.get("_id");
    const CarasoulItems = await Carasoul.find({ _id: id });

    const img = buffer || CarasoulItems.image;
    const title = data.get("title") || CarasoulItems.title;
    const text = data.get("text") || CarasoulItems.text;
    const address = data.get("address") || CarasoulItems.address;
    const bgColor = data.get("bg_color") || CarasoulItems.bgColor;
console.log("near the update call")
    await Carasoul.findOneAndUpdate(
      { _id: id },
      {
        image: img, // Store the binary data directly in the image field
        title: title,
        text: text,
        address: address,
        bg_color: bgColor,
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating document:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
