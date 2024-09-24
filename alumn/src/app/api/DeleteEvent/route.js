import {connect} from '@/dbConfig/dbConfig';
import { NextResponse } from 'next/server';
import Event from '@/Models/Events';
export async function POST(request) {
    try {
      await connect();
      const { id } = await request.json();
      
      console.log("from route event delete", id);
  
      const result = await Event.findByIdAndDelete(id); // Use id directly
  
      if (!result) {
        return NextResponse.json({ error: "Event not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: 'Success' });
    } catch (error) {
      console.error('Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  