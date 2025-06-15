"use client";
import { ReactFitty } from "react-fitty";

const DynamicSizeText = ({
  children,
  className,
}: { children: React.ReactNode; className?: string }) => {
  return (
    <ReactFitty
      className={`${className} transition-all duration-200 ease-in-out`}
    >
      {children}
    </ReactFitty>
  );
};

export default DynamicSizeText;
