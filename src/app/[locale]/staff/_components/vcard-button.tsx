"use client"

import { Button } from "@/components/ui/button";
import { VCardData, generateVCard } from '../../../../lib/vcard';

const VCardButton = ({ data }: { data: any }) => {
  const downloadVCard = () => {
    const vCardData: VCardData = {
      firstName: data.translations.find((t: any) => t.languages_code === 'en').first_name,
      lastName: data.translations.find((t: any) => t.languages_code === 'en').last_name,
      email: data.email,
      phoneNumber: data.phone_number,
      linked_in: data.linked_in
    };

    const vCardString = generateVCard(vCardData);
    const blob = new Blob([vCardString], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'contact.vcf';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Button onClick={downloadVCard} className="w-[95%] md:w-fit rounded-2xl text-base font-semibold md:hidden right-5 md:top-5">
      Save Contact
    </Button>
  );
};

export default VCardButton;
