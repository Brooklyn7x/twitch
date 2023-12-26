import Conatiner from "./_components/container";
import NavBar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />

      <div className="flex h-full pt-20">
        <Sidebar />
        <Conatiner>{children}</Conatiner>
      </div>
    </>
  );
};

export default BrowseLayout;
