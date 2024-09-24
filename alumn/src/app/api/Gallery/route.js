import { connect } from "@/dbConfig/dbConfig";
import Gallery from "@/Models/Gallery";
import { NextResponse } from "next/server";

export async function fetchGalleryData(Number = null) {
  try {
    await connect();
    console.log(Number)
    let data;

    if (Number) {
      data = await Gallery.find({})
        .sort({ _id: -1 }) // Sort by _id in descending order to get the latest documents
        .limit(Number) // Limit to 3 documents
        .lean()
        .exec();

      if (!data) {
        return {}; // Return an empty object if no event is found
      }
    //   console.log(data)
    const plainObject = data.map(item => ({
        _id: item._id.toString(),
        head: item.Caption || "Untitled", // Use a default if caption is missing
        image: item.image ? item.image.toString("base64") : "", // Ensure image exists
      }));
        // console.log(plainObject)
      return plainObject;
    } else {
      data = await Gallery.find({}).lean().exec();

      const plainObject = data.map(item => ({
        _id: item._id.toString(),
        head: item.Caption || "Untitled", // Use a default if caption is missing
        image: item.image ? item.image.toString("base64") : "", // Ensure image exists
      }));

      return plainObject;
    }
  } catch (e) {
    console.error(e); // Log the error for debugging
    // Return an error as an object, not an HTTP response
    return { error: e.message };
  }
}
