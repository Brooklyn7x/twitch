import { cn } from "@/lib/utils";

interface LiveBadgeProps {
  clasname?: string;
}
const LiveBadge = ({ clasname }: LiveBadgeProps) => {
  return (
    <div
      className={cn(
        clasname,
        "bg-rose-500 text-center p-0.5 px-1.5 rounded-md uppercase text-[10px] border border-background font-semibold tracking-wide"
      )}
    >
      Live
    </div>
  );
};

export default LiveBadge;
