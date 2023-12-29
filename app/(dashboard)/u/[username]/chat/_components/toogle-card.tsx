"use client";

import { updateStream } from "@/app/actions/stream";
import { Switch } from "@/components/ui/switch";
import { useTransition } from "react";
import { toast } from "sonner";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToogleCardProps {
  label: string;
  value: boolean;
  field: FieldTypes;
}

const ToogleCard = ({ field, label, value }: ToogleCardProps) => {
  const [isPending, startTransition] = useTransition();

  const onChange = () => {
    startTransition(() => {
      updateStream({ [field]: !value })
        .then(() => toast.success(`Chat setting changed!`))
        .catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <div className="rounded-md bg-slate-800 p-6">
      <div className="flex items-center justify-between">
        <p className="font-semibold shrink-0">{label}</p>
        <div className="space-y-2">
          <Switch
            disabled={isPending}
            onCheckedChange={onChange}
            checked={value}
          >
            {value ? "On" : "Off"}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default ToogleCard;
