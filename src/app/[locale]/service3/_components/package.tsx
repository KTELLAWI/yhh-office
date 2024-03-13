import { useId } from "react";
import { Tooltip } from "react-tooltip";

import { cn } from "@/lib/utils";

import { ServicesButton } from "./button";

const packageTitleBGs = Object.freeze({
  Bronze: "bg-bronze-gradient",
  Silver: "bg-silver-gradient",
  Gold: "bg-gold-gradient",
  Platinum: "bg-platinum-gradient",
  Diamond: "bg-diamond-gradient",
});

const Package = ({
  children,
  highlight = false,
}: {
  children: React.ReactNode;
  highlight?: boolean;
}) => {
  return (
    <div
      className={cn(
        "bg-[#171717] w-full max-w-[232px] rounded-[6px] px-3.5 pt-8 pb-6 flex flex-col items-center",
        highlight && "bg-[#E12120]"
      )}
    >
      {children}
    </div>
  );
};

const PackageTitle = ({
  children,
  className,
  variant,
}: {
  children: string;
  className?: string;
  variant?: keyof typeof packageTitleBGs;
}) => {
  return (
    <div className="text-center mb-2">
      <span
        className={cn(
          "border inline-block border-[#808080] px-2 py-0.5 rounded-[4px]",
          variant && packageTitleBGs[variant],
          className
        )}
      >
        {children}
      </span>
    </div>
  );
};
Package.Title = PackageTitle;

const PackageText = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <p className={cn("text-white text-sm text-center", className)}>
      {children}
    </p>
  );
};
Package.Text = PackageText;

const PackagePrice = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "block text-white text-[22px] mb-1 font-semibold leading-[32px] text-center",
        className
      )}
    >
      {children}
    </span>
  );
};
Package.Price = PackagePrice;

const PackageFeatureList = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <ul className={cn("text-white text-sm m-0 p-0 w-full", className)}>
      {children}
    </ul>
  );
};
Package.FeatureList = PackageFeatureList;

const PackageFeatureItem = ({
  title,
  desc,
  className,
}: {
  title: string;
  desc?: string;
  className?: string;
}) => {
  const id = useId();

  return (
    <li
      className={cn(
        "text-white py-1 text-sm border-t flex justify-between items-center border-[#2B2B2B]",
        className
      )}
    >
      <span className="featureItem text-xs leading-[22px] pe-2">{title}</span>

      {desc && (
        <div className="grow flex justify-end">
          <button className="!bg-transparent" data-tooltip-id={id}>
            <span className="sr-only">open</span>
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" fill="none" viewBox="0 0 13 12">
            <g clipPath="url(#a-feature-info)">
              <circle cx="6.897" cy="3.544" r=".498" fill="#fff"/>
                <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".747" d="M6.4 5.037h.497v3.484m4.977-2.488a4.977 4.977 0 1 1-9.954 0 4.977 4.977 0 0 1 9.954 0Z"/>
            </g>
            <defs>
              <clipPath id="a-feature-info">
                <path fill="#fff" d="M.925.06h11.944v11.945H.925z"/>
              </clipPath>
            </defs>
          </svg>
          </button>

          <Tooltip
            className="!text-white/[0.87] !text-xs !max-w-56 !bg-[#424B57] !p-2.5 !rounded-[6px] !opacity-100"
            id={id}
            content={desc}
            place="top"
          />
        </div>
      )}
    </li>
  );
};
Package.FeatureItem = PackageFeatureItem;

const PackageCTA = ({
  highlight = false,
  calLink,
}: {
  highlight?: boolean;
  calLink: string;
}) => {
  return (
    <div className="grow mt-8 flex flex-col justify-end w-full">
      <ServicesButton
        className={cn(highlight && "bg-white text-[#E12120] hover:bg-white")}
        calLink={calLink}
      >
        Book a meeting
      </ServicesButton>
    </div>
  );
};
Package.CTA = PackageCTA;

export { Package, PackageTitle };
