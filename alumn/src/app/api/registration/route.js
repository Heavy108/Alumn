import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import RegistrationForm from "@/Models/registration";
import { RegistrationEmail } from "@/dbConfig/eventreg";

export async function POST(request) {
  try {
    await connect(); // Connect to the database

    // const data = await request.formData();
    // console.log(data)
    // Extract form data
    const data = await request.formData();
    const Screenshot = data.get("file1");
    console.log(Screenshot);
    let screenshotBuffer;
    if (Screenshot) {
      const screenshotBytes = await Screenshot.arrayBuffer();
      screenshotBuffer = Buffer.from(screenshotBytes);
    }
    // Extract form data with proper key formatting
    const mobile = data.get("Mobile Number") || "";
    const firstName = data.get("First Name*") || "";
    const lastName = data.get("Last Name*") || "";
    const dob = data.get("Date of Birth*") || "";
    const gender = data.get("gender") || "";
    const department = data.get("department") || "";
    const programme = data.get("programme") || "";
    const graduationYear = parseInt(data.get("graduationYear"), 10) || null;
    const currentStatus = data.get("currentStatus") || "";
    const organisation = data.get("Organisation") || "";
    const designation = data.get("Designation") || "";
    const personalEmail = data.get("Personal Email*") || "";
    const companyEmail = data.get("Company Email") || "";
    const address = data.get("Address*") || "";
    const city = data.get("City*") || "";
    const country = data.get("Country*") || "";
    const whatsapp = data.get("WhatsApp Number") || "";
    const accommodation = data.get("accommodation") || "";
    const withFamily = data.get("withFamily") || "";
    const numberOfPersons = parseInt(data.get("numberOfPersons"), 10) || null;
    const foodPreference = data.get("foodPreference") || "";
    const transactionRef = data.get("Transaction Reference No.*") || "";
    const transactionDate = data.get("Transaction Date*") || "";

    // Process the uploaded file (paymentScreenshot)
    
    // Perform field validation
    // if (
    //   !mobile ||
    //   !firstName ||
    //   !lastName ||
    //   !dob ||
    //   !gender ||
    //   !department ||
    //   !programme ||
    //   !graduationYear ||
    //   !currentStatus ||
    //   !personalEmail ||
    //   !address ||
    //   !city ||
    //   !country ||
    //   !transactionRef ||
    //   !transactionDate ||
    //   !accommodation ||
    //   !withFamily
    // ) {
    //   throw new Error("Missing required fields");
    // }

    // Create a new registration entry
    const registrationEntry = await RegistrationForm.create({
      mobile,
      firstName,
      lastName,
      dob: new Date(dob),
      gender,
      department,
      programme,
      graduationYear,
      currentStatus,
      organisation,
      designation,
      companyEmail,
      personalEmail,
      address,
      city,
      country,
      whatsapp,
      accommodation,
      withFamily,
      numberOfPersons,
      foodPreference,
      paymentScreenshot: screenshotBuffer,
      transactionRef,
      transactionDate: new Date(transactionDate),
    });
    await RegistrationEmail(
      firstName,
      lastName,
      numberOfPersons,
      programme,
      personalEmail,
      registrationEntry._id
    );
    console.log(registrationEntry._id);
    // console.log("Registration Entry Saved:", registrationEntry);

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
      data: registrationEntry,
    });
  } catch (error) {
    console.error("Error processing registration form:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
