"use client";
import React, { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function CalComContactButton({
  calLink,
  children,
}: {
  calLink: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi("https://meet.yhh.ae/embed/embed.js");
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return React.cloneElement(children as any, {
    "data-cal-namespace": "",
    "data-cal-link": calLink,
    "data-cal-origin": "https://meet.yhh.ae",
    "data-cal-config": '{"layout":"month_view"}',
  });
}
