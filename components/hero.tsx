import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Hero() {
  return (
    <div className="bg-backgroundColor text-textColor flex flex-col gap-10">
      <div>
        <h1 className="font-bold animate-[menu_1s_1s_both]">
          Hello, my name is
        </h1>
        <p className="md:text-5xl text-4xl py-4 animate-[name_1s_1.5s_both]">
          DARI IBRAHIM AYUBA.
        </p>
        <p className="md:text-4xl text-3xl animate-[sections_1s_2s_both]">
          {" "}
          <span className="text-primaryColor">Front End Developer</span> With
          Backend Skills.
        </p>
      </div>
      <div className="flex gap-5">
        <a href="https://github.com/woodmark-dev" target="_blank">
          <AiFillGithub className="w-8 h-8 animate-[icons_1s_2.5s_both]" />
        </a>
        <a href="https://www.linkedin.com/in/ibrahimayubacodes" target="_blank">
          <AiFillLinkedin className="w-8 h-8 animate-[icons_1s_3s_both]" />
        </a>
        <a
          href="https://x.com/ibroto2?t=PTm0ArCn9HJbDFTbg4QQQQ&s=09"
          target="_blank"
        >
          <AiFillTwitterCircle className="w-8 h-8 animate-[icons_1s_3.5s_both]" />
        </a>
      </div>
    </div>
  );
}
