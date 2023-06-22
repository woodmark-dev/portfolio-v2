const content = {
  choiceOfTech: [
    "The Ethereum-cryptography library emerged as the perfect choice for this project, thanks to its lightweight nature and its impressive array of functions for handling complex cryptography algorithms.",
    "Nest.js took the reins on the backend, ensuring type safety through the power of Typescript and boasting a robust architecture that simplifies maintenance. Think of it as express.js on steroids.",
    "The reliable Prisma database abstraction layer played a vital role, allowing smooth interaction with the database without the need to delve into raw SQL code.",
    "On the frontend, Next.js stole the spotlight, providing excellent code organization and an array of features not found in its cousin, react.js. These features include image optimization and routing.",
    "Last but not least, SWR proved invaluable for data fetching on the frontend. Its lightweight nature and advanced features, such as automatic revalidation, elevated the performance of the application.",
  ],
  lessonsLearned:
    "Undertaking this project has sharpened my ability to effectively navigate and consume documentation. The numerous obstacles encountered along the way have enhanced my cognitive and creative coding skills, providing valuable lessons for future projects. Additionally, I have gained invaluable experience working with Next.js and Nest.js, two remarkable tools that empower developers to build scalable and maintainable full-stack web applications.",
};

export interface Desc2Props {
  choicesOfTechnology: Array<string>;
  lessonsLearned: string;
}

export default function Description2({
  lessonsLearned,
  choicesOfTechnology,
}: Desc2Props) {
  return (
    <div className="flex md:flex-row flex-col gap-10 md:gap-0 justify-between">
      <div className="md:w-[48%]">
        <h1 className="text-xl mb-5 font-bold">Choice of Technologies</h1>
        <ul className="flex flex-col gap-2">
          {choicesOfTechnology.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="md:w-[48%]">
        <h1 className="text-xl mb-5 font-bold">Lessons Learned</h1>
        <p>{lessonsLearned}</p>
      </div>
    </div>
  );
}
