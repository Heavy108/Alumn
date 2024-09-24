import {connect} from "@/dbConfig/dbConfig"
import Event from "@/Models/Events"
import { NextRequest,NextResponse } from "next/server"


export async function fetchEventData() {
    try {
      await connect();
  
      const data = await Event.find({}).lean().exec();
    //   console.log(data)
      const plainObjects = data.map((obj) => ({
        ...obj,
        // time: obj.Date.toJSON(),
        _id:obj._id.toString(),
        E_image: obj.E_image.toString("base64"),
        S_image: obj.S_image.toString("base64"),
      }));
  
    //   console.log(plainObjects); // Check if this logs an array
      return plainObjects;
    } catch (e) {
      console.error(e);
      return []; // Return an empty array in case of an error
    }
  }
  