import { connect } from "@/dbConfig/dbConfig";
import Card from "@/Models/DigitalCard";
import { NextResponse } from "next/server";
export async function POST(request) {
    try {
        await connect();
        const reqBody = await request.json();
        console.log("Request Body:", reqBody);
        const { token } = reqBody;
        console.log("Token:", token);

        const user = await Card.findOne({ verifyToken: token, verifyTokenExpiry: { $gt: Date.now() } });
        if (!user) {
            console.error("Invalid Token or Token Expired");
            return NextResponse.json({ error: "Invalid Token" }, { status: 200 });
        }

        console.log("User Found:", user);

        user.IsVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();

        console.log("User Details - Unique ID:", user.Alumni_ID, "Name:", user.Name, "Passout Year:", user.Passout_Year, "Email:", user.Email);

        return NextResponse.json({
            message: "Email verified successfully",
            success: true,
            uniqueID: user.Alumni_ID,
            name: user.Name,
            passoutYear: user.Passout_Year,
            email: user.Email
        });
    } catch (error) {
        console.error("Error:", error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
