import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import Actions from "./_components/actions";
import { isBlockedByUser } from "@/lib/block-service";

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    return notFound();
  }

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  // if (!isBlocked) {
  //   return notFound;
  // }
  return (
    <>
      <div>{user?.username}</div>
      <div>Followers: {user?.username}</div>
      <div>Is Following: {`${isFollowing}`}</div>
      <p>{`${isBlocked}`}</p>
      <Actions isFollowing={isFollowing} userId={user.id} />
    </>
  );
};

export default UserPage;
