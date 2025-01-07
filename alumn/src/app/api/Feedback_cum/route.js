import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Card from "@/Models/DigitalCard";
import { sendEmail } from "@/dbConfig/verify";
import Feedback from "@/Models/feedback";

const generateUniqueID = async (rollNo, passoutYear) => {
  const randomSixDigit = Math.floor(100000 + Math.random() * 900000);
  return `${rollNo.slice(0, 3).toUpperCase()}${passoutYear}${randomSixDigit}`;
};

export async function POST(request) {
  try {
    await connect();
    const data = await request.formData();

    // Log all form data
    console.log("Form Data:", Array.from(data.entries()));

    // Get the file and other form data
    const file = data.get("file");
    let buffer;

    if (file) {
      const bytes = await file.arrayBuffer();
      buffer = Buffer.from(bytes);
    }
    const image =buffer || "null"
    const Name = data.get("Name");
    const Roll = data.get("Roll No");
    const Email = data.get("Email").toLowerCase();
    const Programme = data.get("Programme");
    const Passout_Year = data.get("Passout Year");
    const Linkedin_Profile = data.get("Linkedin Profile") || "null";
    const Food_pref = data.get("Food_Preference");
    const Rating =data.get("Rating")
    const Comments = data.get("Comment(optional)") || "null";
    console.log(Comments)

    if (
      !Name ||
      !Roll ||
      !Email ||
      !Programme ||
      !Passout_Year 
    ) {
      throw new Error("Missing required fields");
    }

    // Check if the email is already in the database
    const existingCard = await Card.findOne({ Email });
    if (existingCard) {
      return NextResponse.json(
        { success: false, error: "Email already exists" },
        { status: 400 }
      );
    }

    // Generate a unique ID that does not exist in the database
    let Unique_ID;
    let isUnique = false;

    while (!isUnique) {
      Unique_ID = await generateUniqueID(Roll, Passout_Year);
      const existingID = await Card.findOne({ Alumni_ID: Unique_ID });
      if (!existingID) {
        isUnique = true;
      }
    }

    console.log("Generated Unique ID:", Unique_ID);

    await Feedback.create({
      Name: Name,
      Food: Food_pref,
      Rating: Rating,
      Comment: Comments
    });
    // Save data to the database
    const data2 = await Card.create({
      Name: Name,
      Alumni_ID: Unique_ID,
      Roll: Roll,
      Email: Email,
      Programme: Programme,
      Passout_Year: Passout_Year,
      Linkedin_Profile: Linkedin_Profile,
      Profile: image,
      IsVerified: false,
    });
    //send email to the user
    await sendEmail(Unique_ID, Name, Passout_Year, Email, data2._id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving document:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
