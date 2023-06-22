export default function Skills() {
  return (
    <div>
      <h1 className="text-3xl mb-5 font-bold">Skills</h1>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 md:w-[50vw]">
          {contents.skills.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>

        <div className="grid md:grid-cols-4 grid-cols-3 gap-5 text-primaryColor">
          {contents.stack.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

const contents = {
  stack: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6)",
    "TypeScript",
    "Tailwind",
    "React",
    "Redux",
    "Next",
    "Node",
    "Express",
    "Nest",
  ],
  skills: [
    "In addition to the courses included in my degree program, I have actively pursued numerous online courses to further enhance my knowledge and skills. Some notable online classes I have completed include 'The Complete JavaScript Course' on Udemy and several courses from Frontend Masters. Among them are 'The Hard Parts of Object-Oriented JavaScript' and 'Build a Full Stack App with Next.js.' These online courses have played a significant role in expanding my understanding and expertise in various aspects of programming and web development.",
    "By actively engaging in these online learning opportunities, I strive to continuously enhance my skill set and stay abreast of the latest advancements in the field.",
  ],
};
