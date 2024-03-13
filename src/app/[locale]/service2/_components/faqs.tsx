"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

export const Faqs = () => {
  return (
    <section className="lg:flex">
      <h2 className="text-[#E0E0E0] mb-4 text-[42px] leading-tight lg:basis-1/3 shrink-0 me-11">
        Frequently <span className="lg:block">asked questions</span>
      </h2>

      <div className="lg:grow lg:basis-full">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What services does YH&H offer?</AccordionTrigger>
            <AccordionContent>
              YH&H specializes in mobile and web app development, digital
              transformations, UI/UX design, website creation, and consultation
              services.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              How long has YH&H been in business?
            </AccordionTrigger>
            <AccordionContent>
              YH&H has been serving clients with innovative digital solutions
              for 3 years.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-0">
            <AccordionTrigger>
              How often will results be reported?
            </AccordionTrigger>
            <AccordionContent>
              We deliver solutions in agile sprints of 2 weeks each, with
              ongoing enhancements. We report results after each sprint.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
