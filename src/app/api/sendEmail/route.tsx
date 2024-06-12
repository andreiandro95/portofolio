import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req: NextRequest) {
  try {
    const content = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: content.email,
      to: "andrei.andronachi95@gmail.com",
      subject: content.subject,
      html: `
        <p>Name: ${content.name} </p>
        <p>Email: ${content.email} </p>
        <p>Message: ${content.content} </p>
        `,
    };

    await transporter.sendMail(
      mailOptions,
      (error: Error | null, info: { response: string }) => {
        if (error) {
          console.error("❌ Error:", error.message);
        } else {
          console.log("✅ Email sent:", info.response);
        }
      }
    );

    return NextResponse.json(
      { message: "Email send succesfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
