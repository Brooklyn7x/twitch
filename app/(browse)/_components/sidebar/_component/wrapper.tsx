"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useSidebar((state) => state);
  return (
    <div
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-slate-800 border-r z-50",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
