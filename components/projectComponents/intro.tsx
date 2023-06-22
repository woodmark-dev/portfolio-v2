import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";

export interface IntroProps {
  name: string;
  intro: string;
  stack: Array<string>;
  links: Array<{
    href: string;
    label: string;
  }>;
}

export default function Introduction({
  intro,
  stack,
  links,
  name,
}: IntroProps) {
  return (
    <div className="md:w-[50vw]">
      <h1 className="text-3xl mb-5 font-bold">{name}</h1>
      <p className="mb-5">{intro}</p>
      <ul className="grid grid-cols-3 gap-5 mb-8">
        {stack.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul className="flex gap-10 text-primaryColor">
        {links.map((link, i) => (
          <li key={i} className="flex items-center gap-2">
            <a href={link.href}>{link.label}</a>
            <AiOutlineLink className="w-4 h-4" />
          </li>
        ))}
      </ul>
    </div>
  );
}
