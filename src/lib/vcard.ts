export interface VCardData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  linked_in: string;
}

export function generateVCard(data: VCardData): string {
  const vCardString = `
    BEGIN:VCARD
    VERSION:3.0
    FN:${data.firstName} ${data.lastName}
    EMAIL:${data.email}
    TEL:${data.phoneNumber}
    URL:${data.linked_in}
    END:VCARD
  `;
  return vCardString;
}
