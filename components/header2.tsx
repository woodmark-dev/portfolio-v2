import Image from "next/image";
import Link from "next/link";

export default function Header2() {
  return (
    <div className="navbar bg-backgroundColor text-textColor">
      <div className="">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-2xl font-extrabold"
        >
          <Image
            width={120}
            height={120}
            src="/portfolio-logo.svg"
            alt="portfolio logo"
          />
        </Link>
      </div>
    </div>
  );
}
