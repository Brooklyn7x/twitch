"use client";
import { useSidebar } from "@/store/useSidebar";
import { Follow, User } from "@prisma/client";
import UserItem from "./user-item";

interface FollowingProps {
  data: (Follow & { following: User })[];
}

const Following = ({ data }: FollowingProps) => {
  const { collapsed } = useSidebar((state) => state);

  if (!data.length) {
    return null;
  }

  return (
    <div>
      {!collapsed && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Following</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data.map((follow) => (
          <UserItem
            key={follow.following.id}
            username={follow.following.username}
            imgUrl={follow.following.imageUrl}
            isLive={true}
          />
        ))}
      </ul>
    </div>
  );
};

export default Following;


export const FollowingSkeleton = () => {
    return (
        <ul className="px-2 pt-2 lg:"></ul>
    )
}
