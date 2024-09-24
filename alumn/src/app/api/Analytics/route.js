import { connect } from "@/dbConfig/dbConfig";
import Alumni_det from "@/Models/Alumni";
import Achievements from "@/Models/Achievements";
import Card from "@/Models/DigitalCard";
import { NextResponse } from "next/server";

export async function fetchAccountData() {
    try {
        await connect();

        // Aggregation pipeline to count students for different program_id values
        const alumniAggregation = await Alumni_det.aggregate([
            {
                $facet: {
                    totalAlumni: [{ $count: "count" }],  // Total count of alumni
                    BTechAlumni: [{ $match: { Program_ID: "CSB" } }, { $count: "count" }],  // BTech students
                    MTechAlumni: [{ $match: { Program_ID: "CSI" } }, { $count: "count" }],  // MTech students
                    PhDAlumni: [{ $match: { Program_ID: "PHD" } }, { $count: "count" }],  // PhD students
                    OtherPrograms: [{ $match: { Program_ID: { $nin: ["CSB", "CSI", "PHD"] } } }, { $count: "count" }]  // Other programs
                }
            }
        ]);

        // Query to count achievements
        const achievementsCount = await Achievements.countDocuments();

        // Query to count digital cards
        const cardsCount = await Card.countDocuments();

        // Extract counts from alumni aggregation
        const totalAlumni = alumniAggregation[0].totalAlumni[0]?.count || 0;
        const btech = alumniAggregation[0].BTechAlumni[0]?.count || 0;
        const mtech = alumniAggregation[0].MTechAlumni[0]?.count || 0;
        const phd = alumniAggregation[0].PhDAlumni[0]?.count || 0;
        const otherPrograms = alumniAggregation[0].OtherPrograms[0]?.count || 0;

        console.log({
            totalAlumni,
            btech,
            mtech,
            phd,
            otherPrograms,
            achievementsCount,
            cardsCount
        });

        // Return all data as an object
        return {
            totalAlumni,
            btech,
            mtech,
            phd,
            otherPrograms,
            achievementsCount,
            cardsCount
        };
    } catch (error) {
        console.error({ success: false, message: error.message });
        return NextResponse.json('Error Fetching Data', error.message);
    }
}
