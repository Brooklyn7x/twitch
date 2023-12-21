import Action from "./action";
import Logo from "./logo";
import Search from "./search";

const NavBar = () => {
  return (
    <div className="fixed top-0 w-full h-20 z-[40px] bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm">
      <Logo />
      <Search />
      <Action />
    </div>
  );
};

export default NavBar;
