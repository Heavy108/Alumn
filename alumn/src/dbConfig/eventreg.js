import nodemailer from "nodemailer";

export const RegistrationEmail = async (
  firstName,
  lastName,
  numberOfPersons,
  programme,
  personalEmail ,
  uniqueid
) => {
  try {
    
    console.log(
      "Starting email send process for:",
      firstName,
      lastName,
      numberOfPersons,
      programme,
      personalEmail,
      uniqueid
    );
    const name = firstName +" "+lastName
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const detailsPageUrl = `${
      process.env.DOMAIN
    }/Badge?uniqueID=${encodeURIComponent(uniqueid)}&name=${encodeURIComponent(
      name
    )}&passoutYear=${encodeURIComponent(programme)}`;

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL,
      to: personalEmail,
      subject: "Alumni Registration Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto;">
    <h2 style="color: #4CAF50;">Hello ${firstName} ${lastName},</h2>
    <p style="font-size: 16px; color: #333;">
        Thank you for registering for the Alumni Meet happening on <b>January 20-21</b>! We are thrilled to confirm your registration.
    </p>
    <p style="font-size: 16px; color: #333;">
        Here are your registration details:
    </p>
    <ul style="font-size: 16px; color: #333; list-style-type: none; padding: 0;">
        <li><b>EventId:</b> ${uniqueid}</li>
        <li><b>Name:</b> ${firstName} ${lastName}</li>
        <li><b>Number of Persons:</b> ${numberOfPersons}</li>
        <li><b>Programme:</b> ${programme}</li>
    </ul>
    <p style="font-size: 16px; color: #333; margin-top: 20px;">
        To view your Badge, click the button below:
    </p>
    <a href="${detailsPageUrl}" 
       style="display: inline-block; background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">
        View Your Details
    </a>
    <p style="font-size: 16px; color: #333; margin-top: 20px;">
        Interested in becoming a part of our university's digital alumni network? Click the link below to join:
    </p>
    <a href="https://alumniplus.online/Digital_Card"
       style="display: inline-block; background-color: #007BFF; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">
        Join the Digital Alumni Network
    </a>
    <p style="font-size: 16px; color: #333;">
        We look forward to seeing you at the Alumni Meet!
    </p>
    <p style="font-size: 16px; color: #333;">
        Warm regards,<br />
        The Alumni Relations Team
    </p>
    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
    <p style="font-size: 12px; color: #777;">
        This email was sent to ${personalEmail}. If you did not register for the Alumni Meet, please ignore this email.
    </p>
</div>

      `,
    };

   
    const mailResponse = await transporter.sendMail(mailOptions);

    
    if (mailResponse.accepted.length > 0) {
      console.log(
        "Email sent successfully to:",
        mailResponse.accepted.join(", ")
      );
      return {
        success: true,
        message: "Email sent successfully",
        response: mailResponse,
      };
    } else {
      console.log("Email was not sent.");
      return {
        success: false,
        message: "Email was not sent",
        response: mailResponse,
      };
    }
  } catch (error) {
    console.error("Error:", error);
    throw new Error(error.message);
  }
};
