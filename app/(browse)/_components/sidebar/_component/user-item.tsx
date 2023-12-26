"use client";

import LiveBadge from "@/components/live-badge";
import { Button } from "@/components/ui/button";
import UserAvater from "@/components/user-avater";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface UserItemProps {
  username: string;
  imgUrl: string;
  isLive?: boolean;
}

const UserItem = ({ imgUrl, username, isLive }: UserItemProps) => {
  const pathname = usePathname();
  const { collapsed } = useSidebar((state) => state);
  const href = `/${username}`;
  const isActive = pathname === href;
  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "w-full h-12",
        collapsed ? "justify-center" : "justify-start",
        isActive && "bg-accent"
      )}
    >
      <Link href={href}>
        <div
          className={cn(
            "flex items-center w-full gap-x-4",
            collapsed && "justify-center"
          )}
        >
          <UserAvater
            imgUrl={imgUrl}
            username={username}
            isLive={isLive}
            showBedge
          />
          {!collapsed && <p className="truncate">{username}</p>}
          {!collapsed && isLive && <LiveBadge clasname="ml-auto" />}
        </div>
      </Link>
    </Button>
  );
};

export default UserItem;
