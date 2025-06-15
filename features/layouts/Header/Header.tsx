import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="fixed right-0 left-0 flex h-10 w-full items-center justify-between px-10 mix-blend-difference">
      <Image
        className="dark:invert"
        src="/svg/Logo.svg"
        alt="273* Logo"
        width={80}
        height={38}
        priority
      />
      <div className="flex text-slate-50">
        <Button variant="ghost" size="icon">
          <Sparkles />
        </Button>
        <Button variant="ghost" className="text-xl">
          MENU
        </Button>
      </div>
    </div>
  );
};

export default Header;
