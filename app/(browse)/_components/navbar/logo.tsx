import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden lg:flex items-center gap-x-4 hover:opacity-50 transition">
        <div className="rounded-full p-1 bg-white">
          <Image src="/logo.svg" alt="logo" height="40" width="40" />
        </div>
        <div className="text-white">
          <p>Gamehub</p>
          <p>Let&apos;s play</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
