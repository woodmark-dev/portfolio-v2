import Image from "next/image";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";

interface ProjectProps {
  name: string;
  description: string;
  imageLink: string;
  link: string;
}

export default function Project({
  name,
  description,
  link,
  imageLink,
}: ProjectProps) {
  return (
    <div>
      <div>
        <Image src={imageLink} width={600} height={600} alt="uduscare-image" />
        <h2 className="text-4xl text-primaryColor mt-7">{name}</h2>
        <p className="mt-4 md:w-[50%]">{description}</p>
        <div className="mt-7 text-primaryColor flex gap-2 items-center font-bold">
          <Link prefetch={true} href={`/${link}`}>
            View Project
          </Link>
          <AiOutlineLink className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
