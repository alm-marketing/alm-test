import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  // Create a transporter using SMTP
  // Note: In a production environment, use environment variables for these credentials
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: "your_smtp_username",
      pass: "your_smtp_password",
    },
  })

  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"ALM Marketing Contact Form" <noreply@alm-marketing.net>',
      to: "alm-marketing@alm-marketing.net",
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, "<br>")}</p>`,
    })

    console.log("Message sent: %s", info.messageId)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

