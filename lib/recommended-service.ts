import { use } from "react";
import { db } from "./db";

export const getRecommende = async () => {
  const users = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return users;
};
