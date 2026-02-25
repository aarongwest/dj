import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, eventType, eventDate, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"DJ Isaac V Website" <${process.env.GMAIL_USER}>`,
      to: "mail@djisaacv.com",
      replyTo: email,
      subject: `New Booking Inquiry: ${eventType || "Event"} from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111;">New Booking Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;">${phone || "Not provided"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Event Type</td><td style="padding: 8px 0;">${eventType || "Not specified"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Event Date</td><td style="padding: 8px 0;">${eventDate || "Not specified"}</td></tr>
          </table>
          <div style="margin-top: 16px;">
            <p style="color: #666; margin-bottom: 4px;">Message</p>
            <p style="background: #f5f5f5; padding: 12px; border-radius: 6px; margin: 0;">${message}</p>
          </div>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
          <p style="color: #999; font-size: 12px;">Sent from djisaacv.com contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Gmail error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
