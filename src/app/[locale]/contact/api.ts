"use server";

import axios from "axios";

export async function send(data: any) {
  try {
    await axios({
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.arabeelearning.com/api/yhh-contact-forms",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      data: JSON.stringify({ data }),
    });
    return true;
  } catch (e) {
    throw new Error("Failed to create task");
  }
}
