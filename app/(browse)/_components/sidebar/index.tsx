import { getRecommended } from "@/lib/recommended-service";

import Toogle from "./_component/toggle";
import Wrapper from "./_component/wrapper";
import Recommended from "./_component/recommended";

const Sidebar = async () => {
  const recommended = await getRecommended();
  return (
    <Wrapper>
      <Toogle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};

export default Sidebar;
