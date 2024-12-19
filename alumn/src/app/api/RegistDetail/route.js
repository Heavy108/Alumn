import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import RegistrationForm from "@/Models/registration"



export async function fetchRegistData() {
  try {
    await connect()
    const data = await RegistrationForm.find().lean().exec();
   
    const encodedData = data.map((item) => ({
      ...item,
      transactionDate: item.transactionDate.toLocaleString(),
      _id:item._id.toString("base64"),
      dob: item.dob.toLocaleString(),

      paymentScreenshot: item.paymentScreenshot.toString("base64"),
    }));
   
    return encodedData;
    // return Data;
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
