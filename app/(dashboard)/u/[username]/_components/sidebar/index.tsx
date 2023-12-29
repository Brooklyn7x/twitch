import Navigation from "./navigation";
import Toogle from "./toggle";
import Wrapper from "./wrapper";

const Sidebar = () => {
  return (
    <Wrapper>
      <Toogle />
      <Navigation />
    </Wrapper>
  );
};

export default Sidebar;
