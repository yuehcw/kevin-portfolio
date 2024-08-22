import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { firstname, lastname, email, phone, service, message } = await req.json();

  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Send email
    let info = await transporter.sendMail({
      from: `"${firstname} ${lastname}" <${email}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'New Contact Form Submission',
      text: `
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
    });

    console.log('Message sent: %s', info.messageId);
    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      { success: false, error: error.message, details: JSON.stringify(error) },
      { status: 500 }
    );
  }
}