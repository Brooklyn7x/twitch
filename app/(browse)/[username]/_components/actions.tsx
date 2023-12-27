"use client";

import { onFollow, onUnFollow } from "@/app/actions/follow";
import { Button } from "@/components/ui/button";
import { unfollowUser } from "@/lib/follow-service";
import { useTransition } from "react";
import { toast } from "sonner";

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

const Actions = ({ isFollowing, userId }: ActionsProps) => {
  const [ispending, startTrans] = useTransition();
  const handleFollow = () => {
    startTrans(() => {
      onFollow(userId)
        .then((data) => toast.success(`Following ${data.following.username}`))
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const handleUnFollow = () => {
    startTrans(() => {
      onUnFollow(userId)
        .then((data) => toast.success(`Unfollow ${data.following.username}`))
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const onClick = () => {
    if (isFollowing) {
      handleUnFollow();
    } else {
      handleFollow();
    }
  };

  return (
    <Button disabled={ispending} onClick={onClick}>
      {isFollowing ? "UnFollow" : "Follow"}
    </Button>
  );
};

export default Actions;
