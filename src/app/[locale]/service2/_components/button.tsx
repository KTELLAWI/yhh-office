"use client";

import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CalComContactButton from "@/components/CalComContactButton";

export const ServicesButton = ({
  children,
  className,
  calLink,
}: {
  children: React.ReactNode;
  calLink: string;
  className?: string;
}) => {
  return (
    <CalComContactButton calLink={calLink}>
      <Button
        className={cn(
          "rounded-[10px] mb-0 bg-transparent w-full h-[46px] shadow-[0_0_60px_rgba(255,255,255,0.1)] py-3 px-8",
          className
        )}
      >
        {children}
      </Button>
    </CalComContactButton>
  );
};
