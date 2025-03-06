import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

// Initialize Notion client
// You'll need to set NOTION_API_KEY and NOTION_DATABASE_ID in your environment variables
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Add to Notion database
    // Replace with your actual database ID from Notion
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!databaseId) {
      console.error("NOTION_DATABASE_ID is not defined");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Create a new page in the database
    await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Email: {
          title: [
            {
              text: {
                content: email,
              },
            },
          ],
        },
        Status: {
          rich_text: [
            {
              text: {
                content: "New",
              },
            },
          ],
        },
        "Sign Up Date": {
          rich_text: [
            {
              text: {
                content: new Date().toISOString(),
              },
            },
          ],
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error adding email to Notion:", error);
    return NextResponse.json(
      { error: "Failed to add email to database" },
      { status: 500 }
    );
  }
}
