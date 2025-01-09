'use server';

import { connectSchema } from '../schemas/connect';
import { ConnectFormState, StringMap } from '../types';
import { convertZodErrors } from '../utils/forms';

export const formHandlerAction = async (
  prevState: ConnectFormState<StringMap>,
  formData: FormData
): Promise<ConnectFormState<StringMap>> => {
  //uncomment to easily view loading state in submit button
  //await sleep(1000);

  const unvalidatedData: StringMap = {
    firstName: formData.get('firstNajjme') as string,
    lastName: formData.get('lastName') as string,
    email: formData.get('email') as string,
    streetAddress: formData.get('streetAddress') as string,
    city: formData.get('city') as string,
    state: formData.get('state') as string,
    zip: formData.get('zip') as string,
    phone: formData.get('phone') as string,
    firstTime: formData.get('firstTime') as string,
    comment: formData.get('comment') as string,
    callMe: formData.get('callMe') as string,
  };

  const validated = connectSchema.safeParse(unvalidatedData);

  if (!validated.success) {
    const errors = convertZodErrors(validated.error);
    return {
      errors,
      data: unvalidatedData,
    };
  } else {
    return {
      // save to DB
      successMsg: 'Connection added successfully!', 
      errors: {},
      data: {}
    };
  }
};









/*
import { revalidatePath } from "next/cache";
import { sql } from "@vercel/postgres";
import { z } from "zod";
import { AnyARecord } from "dns";

let sql = postgres(process.env.DATABASE_URL || process.env.POSTGRES_URL!, {
  ssl: "allow",
});

// CREATE TABLE todos (
//   id SERIAL PRIMARY KEY,
//   text TEXT NOT NULL
// );

export async function createConnection(
  prevState: any,
  formData: FormData
) {
  const schema = z.object({
    firstName: z.string({message: 'First Name is required'}).min(3,'First Name should have at least 3 characters'),
  });
  const data = schema.parse({
    connect: formData.get("connection"),
  });

  if (!parse.success) {
    return { message: "Failed to create connection" };
  }

  const data = parse.data;

  try {
    await sql`
      INSERT INTO connection (text)
      VALUES (${data.connection})
    `;

    revalidatePath("/");
    return { message: `Added connection ${data.connection}` };
  } catch (e) {
    return { message: "Failed to create connection" };
  }
}
  */