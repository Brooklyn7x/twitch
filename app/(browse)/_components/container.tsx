"use client";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";

interface ConatinerProps {
  children: React.ReactNode;
}

const Conatiner = ({ children }: ConatinerProps) => {
  const matches = useMediaQuery("(max-width: 1024px )");
  const { collapsed, onCollapse, onExand } = useSidebar((state) => state);

  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExand();
    }
  }, [matches, onCollapse, onExand]);
  return (
    <div
      className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}
    >
      {children}
    </div>
  );
};

export default Conatiner;
