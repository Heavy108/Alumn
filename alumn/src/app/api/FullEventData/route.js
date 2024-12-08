import { connect } from "@/dbConfig/dbConfig";
import Event from "@/Models/Events";
import { NextResponse } from "next/server";

export async function fetchFullEventData() {
  try {
    await connect()

    
      const data = await Event.find({}, { S_image: 0, description: 0, Title: 0 })
        .sort({ _id: -1 }) // Sort by _id in descending order to get the latest documents
        .lean()
        .exec();

      const plainObjects = data.map((obj) => ({
        ...obj,
        time: obj.time ? obj.time.toLocaleString() : null, // Convert time for each event
        _id: obj._id.toString(),
        E_image: obj.E_image ? obj.E_image.toString("base64") : "", // Ensure image exists
      }));

      //   console.log(plainObjects); // Debugging
      return plainObjects;
    
  } catch (e) {
    console.error(e); // Log the error for debugging
    // Return an error as an object, not an HTTP response
    return { error: e.message };
  }
}
