import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL =
  "https://raduc.app.n8n.cloud/webhook/make-reservation";
const WEBHOOK_USERNAME = "oak-barrel";
const WEBHOOK_PASSWORD = "oak-barrel#123";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, partySize, dateTime } = body;

    // Validate required fields
    if (!name || !partySize || !dateTime) {
      return NextResponse.json(
        { error: "Missing required fields: name, partySize, dateTime" },
        { status: 400 }
      );
    }

    // Create Basic Auth header
    const credentials = Buffer.from(
      `${WEBHOOK_USERNAME}:${WEBHOOK_PASSWORD}`
    ).toString("base64");

    // Call the n8n webhook
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify({
        name,
        partySize: Number(partySize),
        dateTime,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Webhook error:", response.status, errorText);
      return NextResponse.json(
        { error: "Failed to create reservation" },
        { status: response.status }
      );
    }

    const data = await response.json().catch(() => ({}));

    return NextResponse.json({
      success: true,
      message: "Reservation created successfully",
      data,
    });
  } catch (error) {
    console.error("Reservation API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
