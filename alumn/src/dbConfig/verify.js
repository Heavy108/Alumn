import nodemailer from "nodemailer";
import Card from "@/Models/DigitalCard";
import bcryptjs from "bcryptjs";

export const sendEmail = async ( Unique_ID, Name, Passout_Year, email ) => {
  try {
    // create a hashed token
    console.log("Starting email send process for:", Unique_ID, Name, Passout_Year, email);

    const hashedToken = await bcryptjs.hash(Unique_ID.toString(), 10);
    console.log("Hashed token created:", hashedToken);

    const updateResult = await Card.findOneAndUpdate(
      { Alumni_ID: Unique_ID },
      {
        verifyToken: hashedToken,
        // verifyTokenExpiry: Date.now() + 3600000, 
      },
      { new: true } // This option returns the updated document
    );

    if (!updateResult) {
      console.log("No document found with Alumni_ID:", Unique_ID);
      throw new Error("No matching document found in the database");
    }

    console.log("Database updated successfully:", updateResult);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Alumni Email Verification",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto;">
          <h2 style="color: #4CAF50;">Hello ${Name},</h2>
          <p style="font-size: 16px; color: #333;">
            We are excited to have you as part of our alumni network! To complete your registration, please verify your email by clicking the button below.
          </p>
          <a href="${process.env.DOMAIN}/VerifyMail?token=${hashedToken}" 
             style="display: inline-block; background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">
            Verify Your Email
          </a>
          <p style="font-size: 16px; color: #333; margin-top: 20px;">
            If the button above doesn't work, please copy and paste the following link into your browser:
          </p>
          <p style="font-size: 14px; color: #555;">
            ${process.env.DOMAIN}/VerifyMail?token=${hashedToken}
          </p>
          <p style="font-size: 16px; color: #333;">
            Thank you,<br />
            The Alumni Relations Team
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="font-size: 12px; color: #777;">
            This email was sent to ${email}. If you did not request this verification, please ignore this email.
          </p>
        </div>
      `,
    };

    const mailResponse = await transporter.sendMail(mailOptions);

    // Check if the email was sent successfully
    if (mailResponse.accepted.length > 0) {
      console.log('Email sent successfully to:', mailResponse.accepted.join(', '));
      return { success: true, message: 'Email sent successfully', response: mailResponse };
    } else {
      console.log('Email was not sent.');
      return { success: false, message: 'Email was not sent', response: mailResponse };
    }
  } catch (error) {
    console.error("Error:", error);
    throw new Error(error.message);
  }
};
