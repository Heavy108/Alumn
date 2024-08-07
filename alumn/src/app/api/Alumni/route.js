import {connect} from "@/dbConfig/dbConfig"
import { NextRequest,NextResponse } from "next/server";
import Alumni_det from "@/Models/Alumni";

export async function FetchData(program,year){
    try {
        console.log(year,program)
        await connect();
        const Data = await Alumni_det.find(
            { Program_ID: program, Year: year },
            { Name: 1, Email: 1, Roll_Number: 1, }
          ).lean().exec();
        // console.log(Data)
        return Data;
    
    } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}