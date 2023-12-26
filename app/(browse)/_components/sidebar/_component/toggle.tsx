"use client";

import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/useSidebar";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Toogle = () => {
  const { collapsed, onCollapse, onExand } = useSidebar((state) => state);
  const label = collapsed ? "Expand" : "Collapse";
  return (
    <>
      {collapsed && (
        <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
          <Hint asChild side="right" label={label}>
            <Button variant="ghost" className="h-auto p-2" onClick={onExand}>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
      {!collapsed && (
        <div className="p-3 pl-6 mb-2 flex items-center w-full">
          <p className="font-semibold">For you</p>
          <Hint label={label} side="right" asChild>
            <Button
              className="h-auto p-2 ml-auto"
              variant="ghost"
              onClick={onCollapse}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
};

export default Toogle;
