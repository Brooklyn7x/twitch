import { getSelf } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/stream-service";
import Toogle from "../_components/sidebar/toggle";
import ToogleCard from "./_components/toogle-card";

const Chat = async () => {
  const self = await getSelf();
  const stream = await getStreamByUserId(self.id);

  if (!stream) {
    throw new Error("Stream not found");
  }

  return (
    <div className="p-6">
      <div className="mb-4">
        <h1 className="text-2xl">Hi</h1>
      </div>
      <div className="space-y-5">
        <ToogleCard
          field="isChatEnabled"
          label="Enable chat"
          value={stream.isChatEnabled}
        />
        <ToogleCard
          field="isChatDelayed"
          label="Delayed chat"
          value={stream.isChatDelayed}
        />
        <ToogleCard
          field="isChatFollowersOnly"
          label="Chat muted"
          value={stream.isChatFollowersOnly}
        />
      </div>
    </div>
  );
};

export default Chat;
