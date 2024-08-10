import nodemailer from "nodemailer";

export const SendCredentials = async (uniqueID, name, passoutYear, email) => {
  try {
    // Create a transport instance
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Generate a unique link to a page with the details (e.g., `/alumni/details`)
    const detailsPageUrl = `${process.env.DOMAIN}/Badge?uniqueID=${encodeURIComponent(uniqueID)}&name=${encodeURIComponent(name)}&passoutYear=${encodeURIComponent(passoutYear)}`;

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Your Alumni Credentials",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto;">
          <h2 style="color: #4CAF50;">Hello ${name},</h2>
          <p style="font-size: 16px; color: #333;">
            Congratulations! Your email has been successfully verified. Here are your alumni credentials:
          </p>
          <ul style="font-size: 16px; color: #333;">
            <li><strong>Unique ID:</strong> ${uniqueID}</li>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Passout Year:</strong> ${passoutYear}</li>
          </ul>
          <p style="font-size: 16px; color: #333; margin-top: 20px;">
            To view more details, click the button below:
          </p>
          <a href="${detailsPageUrl}" 
             style="display: inline-block; background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;">
            View Your Details
          </a>
          <p style="font-size: 16px; color: #333; margin-top: 20px;">
            If the button above doesn't work, please copy and paste the following link into your browser:
          </p>
          <p style="font-size: 14px; color: #555;">
            ${detailsPageUrl}
          </p>
          <p style="font-size: 16px; color: #333;">
            Thank you,<br />
            The Alumni Relations Team
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="font-size: 12px; color: #777;">
            This email was sent to ${email}. If you did not request this information, please ignore this email.
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
