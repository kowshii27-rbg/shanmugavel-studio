import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(6, "Enter a phone number"),
  shootType: z.string().min(1, "Select a shoot type"),
  preferredDate: z.string().optional(),
  time: z.string().optional(),
  location: z.enum(["Studio", "Outdoor", "Other"]),
  message: z.string().min(5, "Tell us a bit more"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = bookingSchema.parse(body);

    // Save to database
    const booking = await prisma.booking.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        shootType: validatedData.shootType,
        preferredDate: validatedData.preferredDate || null,
        time: validatedData.time || null,
        location: validatedData.location,
        message: validatedData.message,
      },
    });

    // Send email notification to owner
    const ownerEmail = process.env.OWNER_EMAIL || "prasathsvstudio@gmail.com";
    
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f5c466; color: #0b0b0d; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; color: #333; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Booking Request - Shanmugavel Studio</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${validatedData.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${validatedData.email}">${validatedData.email}</a></div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value"><a href="tel:${validatedData.phone}">${validatedData.phone}</a></div>
              </div>
              <div class="field">
                <div class="label">Shoot Type:</div>
                <div class="value">${validatedData.shootType}</div>
              </div>
              ${validatedData.preferredDate ? `
              <div class="field">
                <div class="label">Preferred Date:</div>
                <div class="value">${new Date(validatedData.preferredDate).toLocaleDateString()}</div>
              </div>
              ` : ""}
              ${validatedData.time ? `
              <div class="field">
                <div class="label">Preferred Time:</div>
                <div class="value">${validatedData.time}</div>
              </div>
              ` : ""}
              <div class="field">
                <div class="label">Location:</div>
                <div class="value">${validatedData.location}</div>
              </div>
              <div class="field">
                <div class="label">Message / Requirements:</div>
                <div class="value">${validatedData.message.replace(/\n/g, "<br>")}</div>
              </div>
              <div class="footer">
                <p>Booking ID: ${booking.id}</p>
                <p>Submitted: ${new Date(booking.createdAt).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // For development, use Resend's test domain. For production, verify your domain in Resend dashboard
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Shanmugavel Studio <onboarding@resend.dev>";
    
    await resend.emails.send({
      from: fromEmail,
      to: ownerEmail,
      subject: `New Booking Request: ${validatedData.shootType} - ${validatedData.name}`,
      html: emailHtml,
      replyTo: validatedData.email,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Booking request submitted successfully! We'll contact you shortly.",
        bookingId: booking.id,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation error",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    console.error("Booking submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit booking. Please try again later.",
      },
      { status: 500 }
    );
  }
}

