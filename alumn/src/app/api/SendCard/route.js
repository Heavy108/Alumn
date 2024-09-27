import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { uniqueID, name, passoutYear, email } = await request.json();
    
    // Create a transport instance
    console.log(uniqueID, name, passoutYear, email)
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
            <li><strong>Alumni ID:</strong> ${uniqueID}</li>
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
    
          <!-- Instructions to write a blog -->
          <p style="font-size: 16px; color: #333; margin-top: 20px;">
            You can now contribute to our alumni blog! To write a blog post on the website, use the following credentials:
          </p>
          <ul style="font-size: 16px; color: #333;">
            <li><strong>Username (Email):</strong> ${email}</li>
            <li><strong>Password (Alumni ID):</strong> ${uniqueID}</li>
          </ul>
          <p style="font-size: 16px; color: #333;">
            Simply log in to your alumni account and start writing your blog today!
          </p>
    
          <p style="font-size: 16px; color: #333; margin-top: 20px;">
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

    if (mailResponse.accepted.length > 0) {
      console.log('Email sent successfully to:', mailResponse.accepted.join(', '));
      return new Response(JSON.stringify({ success: true, message: 'Email sent successfully', response: mailResponse }), { status: 200 });
    } else {
      console.log('Email was not sent.');
      return new Response(JSON.stringify({ success: false, message: 'Email was not sent', response: mailResponse }), { status: 400 });
    }
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
