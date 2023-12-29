import { getSelfByUsername } from "@/lib/auth-service";
import { redirect } from "next/navigation";
import NavBar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import Conatiner from "./_components/conatiner";

interface CreatorPageLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const CreatorPageLayout = async ({
  children,
  params,
}: CreatorPageLayoutProps) => {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    redirect("/");
  }

  return (
    <>
      <NavBar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Conatiner >{children}</Conatiner>
      </div>
    </>
  );
};

export default CreatorPageLayout;
