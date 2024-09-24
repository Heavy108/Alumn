import {connect} from '@/dbConfig/dbConfig';
import { NextResponse } from 'next/server';
import Gallery from '@/Models/Gallery';
export async function POST(request) {
    try {
      await connect();
      const { id } = await request.json();
      
      console.log("from route event delete", id);
  
      const result = await Gallery.findByIdAndDelete(id); // Use id directly
  
      if (!result) {
        return NextResponse.json({ error: "Image not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: 'Success' });
    } catch (error) {
      console.error('Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  