"use server";

import { createDirectus, rest, readItems, authentication } from "@directus/sdk";

const client = createDirectus("https://cms.yhh.ae")
  .with(authentication())
  .with(rest());
client.setToken(`${process.env.DIRECTUS_ACCESS_TOKEN}`);

export const fetchBLogs = async () => {
  try {
    const response = await client.request(
      readItems("website_blogs", {
        fields: [
          "*",
          { translations: ["*"] },
          { face_image: ["filename_disk"] },
        ],
      })
    );

    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
};
