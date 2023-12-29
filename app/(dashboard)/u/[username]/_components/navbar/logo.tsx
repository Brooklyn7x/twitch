import { CameraIcon, LayoutDashboardIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-50 transition">
        <div className="p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
          <LayoutDashboardIcon className="h-10 w-10" />
        </div>
        <div className="text-white hidden lg:block">
          <p>Gamehub</p>
          <p>Creator Dashboard</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
