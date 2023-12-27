import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import Actions from "./_components/actions";

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

  return (
    <>
      <div>{user?.username}</div>
      <div>Followers: {user?.username}</div>
      <div>Is Following: {`${isFollowing}`}</div>
      <Actions isFollowing ={isFollowing} userId={user.id} />
    </>
  );
};

export default UserPage;
