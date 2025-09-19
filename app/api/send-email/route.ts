import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, projectType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      company: company || "",
      phone: phone || "",
      project_type: projectType || "",
      message: message,
      to_email: "dev.mureai@mureai.com",
    };

    // Use PRIVATE key here
    const result = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      templateParams,
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY!,
        privateKey: process.env.EMAILJS_PRIVATE_KEY!,
      }
    );

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
