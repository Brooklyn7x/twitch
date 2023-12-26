import { VariantProps, cva } from "class-variance-authority";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import LiveBadge from "./live-badge";

interface UserAvaterProps extends VariantProps<typeof avatarSizes> {
  imgUrl: string;
  username: string;
  isLive?: boolean;
  showBedge?: boolean;
}

const avatarSizes = cva("", {
  variants: {
    size: {
      default: "h-8 w-8",
      lg: "h-14 w-14",
    },
    defaultVariants: {
      size: "default",
    },
  },
});

const UserAvater = ({
  imgUrl,
  username,
  isLive,
  showBedge,
  size,
}: UserAvaterProps) => {
  const canShowBedge = showBedge && isLive;
  return (
    <div className="relative">
      <Avatar
        className={cn(
          isLive && "ring-2 ring-rose-600 border-background",
          avatarSizes({ size })
        )}
      >
        <AvatarImage src={imgUrl} className="object-cover"></AvatarImage>
        <AvatarFallback>
          {username[0]}
          {[username.length - 1]}
        </AvatarFallback>
      </Avatar>
      {canShowBedge && (
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <LiveBadge />
        </div>
      )}
    </div>
  );
};

export default UserAvater;
