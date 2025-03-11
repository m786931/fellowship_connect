import { ConnectCard } from "@/app/types";
import { sql } from "@vercel/postgres";

export const checkChurchId = async () => {
  try {
    //await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
    //await sql`CREATE TABLE IF NOT EXISTS "messages" (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), name VARCHAR(250), email VARCHAR(250), message VARCHAR(250), created_at timestamp DEFAULT now() NOT NULL);`;
    console.log("Successfully initialized the messages table")
    return;
  } catch (error) {
    throw new Error(`Yikes! We ran into an error: ${error}`)
  }
};

export const createRow = async (data: ConnectCard) => {
  try {
    console.log("Ready for Insert: " + data.churchId);
    await sql`INSERT INTO "contact_card" (churchId, firstName, lastName, email, streetAddress, city, state, zip, phone, firstTime, comment, callMe) VALUES (${data.churchId}, ${data.firstName}, ${data.lastName}, ${data.email}, ${data.streetAddress}, ${data.city}, ${data.state}, ${data.zip}, ${data.phone}, ${data.firstTime}, ${data.comment}, ${data.callMe});`;
    console.log("Successfully added row in messages table");
    return;
  } catch (error) {
    throw new Error(`Yikes! We ran into an error: ${error}`);
  }
};