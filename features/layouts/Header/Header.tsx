"use client";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useMaterial } from "@/contexts/MaterialContext";
import type { MaterialType } from "@/contexts/types";

const Header = () => {
  const { toggleMaterial } = useMaterial();

  const materialTypes: MaterialType[] = [
    "metal",
    "lamina",
    "wireframe",
    "ascii",
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % materialTypes.length;
    setCurrentIndex(nextIndex);
    toggleMaterial(materialTypes[nextIndex]);
  };

  return (
    <div className="fixed right-0 left-0 z-200 flex h-10 w-full items-center justify-between px-10 mix-blend-difference">
      <Image
        className="dark:invert"
        src="/svg/Logo.svg"
        alt="273* Logo"
        width={80}
        height={38}
        priority
      />
      <div className="flex gap-1 text-slate-50">
        <Button
          variant="ghost"
          size="icon"
          className="cursor-pointer"
          onClick={handleClick}
        >
          <Sparkles />
        </Button>
        <p className="mt-1 cursor-pointer text-xl">MENU</p>
      </div>
    </div>
  );
};

export default Header;
