import { getRecommended } from "@/lib/recommended-service";

import Toogle from "./_component/toggle";
import Wrapper from "./_component/wrapper";
import Recommended from "./_component/recommended";
import { getFollowedUsersList } from "@/lib/follow-service";
import Following from "./_component/following";

const Sidebar = async () => {
  const recommended = await getRecommended();
  const following = await getFollowedUsersList()
  return (
    <Wrapper>
      <Toogle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommended data={recommended} />
        <Following data={following}/>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
