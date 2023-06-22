import Link from "next/link";
import { HiMenuAlt4 } from "react-icons/hi";
export default function Header() {
  return (
    <div className="navbar flex justify-between bg-backgroundColor text-textColor">
      <div className="">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-2xl font-extrabold"
        >
          DARI
        </Link>
      </div>
      <div className="dropdown dropdown-left lg:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          <HiMenuAlt4 className="w-6 h-6" />
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-10 p-2 ml-20 rounded-box w-36 z-30 flex flex-col items-center justify-center bg-primaryColor text-backgroundColor font-semibold"
        >
          {contents.map((item, i) => (
            <li key={i} className="animate-[menu_1s_both]">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {contents.map((item, i) => (
            <li className="animate-[menu_1s_both]" key={i}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const contents = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
];
