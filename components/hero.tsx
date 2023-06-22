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
          <span className="text-primaryColor">Front End Developer</span>,
          Vanilla Javascript Enthusiast, and Writer.
        </p>
      </div>
      <div className="flex gap-5">
        <AiFillGithub className="w-8 h-8 animate-[icons_1s_2.5s_both]" />
        <AiFillLinkedin className="w-8 h-8 animate-[icons_1s_3s_both]" />
        <AiFillTwitterCircle className="w-8 h-8 animate-[icons_1s_3.5s_both]" />
      </div>
    </div>
  );
}
