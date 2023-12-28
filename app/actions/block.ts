"use server";

import { blockUser, unblockUser } from "@/lib/block-service";
import { revalidatePath } from "next/cache";

export const onBlock = async (id: string) => {
  try {
    const blockedUser = await blockUser(id);

    revalidatePath("/");

    if (blockedUser) {
      revalidatePath(`/${blockedUser.blocked.username}`);
    }
    return blockedUser;
  } catch (error) {
    console.log(error);
  }
};

export const unBlock = async (id: string) => {
  const unblockedUser = await unblockUser(id);

  if (!unblockedUser) {
    throw new Error("User not Found");
  }
  revalidatePath("/");

  if (unblockedUser) {
    revalidatePath(`/${unblockedUser.blocked.username}`);
  }

  return unblockedUser;
};
