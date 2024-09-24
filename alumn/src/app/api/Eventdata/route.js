import { connect } from "@/dbConfig/dbConfig";
import Event from "@/Models/Events";
import { NextResponse } from "next/server";

export async function fetchData(currentPage = 1, itemsPerPage = 3) {
    try {
      await connect();
      
      
      
      // Fetch paginated data
      const data = await Event.find({}, { E_image: 1, Head: 1 })
        .lean()
        .exec();
      
      const plainObjects = data.map((obj) => ({
        _id: obj._id.toString(),
        image: obj.E_image ? obj.E_image.toString("base64") : "", // Ensure image exists
        head: obj.Head || "No Head Available",
      }));
  
      // Calculate total pages
    //   console.log(plainObjects)
     
  
      return plainObjects; // Return both data and totalPages
    } catch (e) {
      console.error(e);
      return { error: e.message };
    }
  }
  