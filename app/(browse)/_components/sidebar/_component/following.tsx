"use client";
import { Follow, User } from "@prisma/client";

interface FollowingProps {
  data: (Follow & { following: User })[];
}

const Following = ({ data }: FollowingProps) => {
  return <div>Enter</div>;
};

export default Following;
