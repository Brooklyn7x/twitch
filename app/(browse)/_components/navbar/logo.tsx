import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-50 transition">
        <div className="rounded-full p-1 mr-12 bg-white shrink-0 lg:mr-0 lg:shrink">
          <Image src="/logo.svg" alt="logo" height="36" width="36"  />
        </div>
        <div className="text-white hidden lg:block">
          <p>Gamehub</p>
          <p>Let&apos;s play</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
