"use client";

import { onBlock, unBlock } from "@/app/actions/block";
import { onFollow, onUnFollow } from "@/app/actions/follow";
import { Button } from "@/components/ui/button";
import { unfollowUser } from "@/lib/follow-service";
import { stat } from "fs";
import { startTransition, useTransition } from "react";
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

  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId)
        .then((data) => toast.success(`Blocked ${data?.blocked.username}`))
        .catch((e) => toast.error(e));
    });
  };

  const handleUnBlock = () => {
    startTransition(() => {
      unBlock(userId)
        .then((data) => toast.success(`UnBlocked ${data.blocked.username}`))
        .catch((e) => toast.error(e));
    });
  };

  return (
    <>
      <Button disabled={ispending} onClick={onClick}>
        {isFollowing ? "UnFollow" : "Follow"}
      </Button>
      <Button onClick={handleUnBlock}>unBlock</Button>
      <Button onClick={handleBlock}>Block</Button>
    </>
  );
};

export default Actions;
