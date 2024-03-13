import { createDirectus, rest, readItem, authentication, readAssetRaw } from '@directus/sdk';

export const fetchStaffMember = async (id: any) => {
  const client = createDirectus(`https://cms.yhh.ae`).with(authentication()).with(rest());
  client.setToken(`${process.env.DIRECTUS_ACCESS_TOKEN}`);

  try {
    const response = await client.request(
      readItem("website_staff", id, {
        fields: ['*', { translations: ['*'] }, { face_image: ['filename_disk'] }],
      }),
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};