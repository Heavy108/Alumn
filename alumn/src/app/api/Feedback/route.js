import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import AlumniFeedback from "@/Models/AlumniFeedback";
import { sendEmail } from "@/dbConfig/verify";
export async function POST(request) {
  try {
    await connect();
    const data = await request.formData();

    console.log("Form Data:", Array.from(data.entries()));

    const name = data.get("Name");
    const graduationYear = data.get("Year of Graduation");
    const email = data.get("Contact Email").toLowerCase();
    const eventOrganization = data.get("eventOrganization");
    const venueAndFacilities = data.get("venueAndFacilities");
    const agendaActivities = data.get("agendaActivities");
    const networkingOpportunities = data.get("networkingOpportunities");
    const qualityOfFood = data.get("qualityOfFood");
    const favoritePart = data.get("favoritePart") || "null";
    const activitiesImprovement = data.get("activitiesImprovement") || "null";
    const attendFuture = data.get("attendFuture");
    const suggestions = data.get("suggestions") || "null";
    const otherFeedback = data.get("otherFeedback") || "null";

    if (
      !name ||
      !graduationYear ||
      !email ||
      !eventOrganization ||
      !venueAndFacilities ||
      !agendaActivities ||
      !networkingOpportunities ||
      !qualityOfFood ||
      !attendFuture
    ) {
      throw new Error("Missing required fields");
    }

    await AlumniFeedback.create({
      name,
      graduationYear,
      email,
      eventOrganization,
      venueAndFacilities,
      agendaActivities,
      networkingOpportunities,
      qualityOfFood,
      favoritePart,
      activitiesImprovement,
      attendFuture,
      suggestions,
      otherFeedback,
    });
    //send email to the user
    // await sendEmail(name, graduationYear, email, data2._id);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Error saving feedback:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
