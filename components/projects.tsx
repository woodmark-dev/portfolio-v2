import Project from "./project";

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl mb-5 font-bold">
        Projects I&apos;ve Been Working On
      </h1>
      <p className="md:w-[50vw] mb-16">{contents.intro}</p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-24">
        <Project
          name={contents.uduscare.name}
          description={contents.uduscare.description}
          link={contents.uduscare.link}
          imageLink={contents.uduscare.imageLink}
        />
        <Project
          name={contents.newsfeed.name}
          description={contents.newsfeed.description}
          link={contents.newsfeed.link}
          imageLink={contents.newsfeed.imageLink}
        />
        <Project
          name={contents.mirageStore.name}
          description={contents.mirageStore.description}
          link={contents.mirageStore.link}
          imageLink={contents.mirageStore.imageLink}
        />
      </div>
    </div>
  );
}

const contents = {
  intro:
    "When I'm not immersed in acquiring new knowledge, I dedicate my time to constructing web applications utilizing the expertise I've gained. Please peruse a selection of my creations showcased below.",
  uduscare: {
    name: "UdusCare",
    description:
      "A hospital appointment booking web application built using Next.js, Nest.js, Prisma, and Ethereum Cryptography Library.",
    link: "uduscare",
    imageLink: "/project-images/udus-care-images/uduscare-1.png",
  },
  newsfeed: {
    name: "NewsFeed",
    description:
      "A campus news feed web application built using Next.js and Nest.js.",
    link: "newsfeed",
    imageLink: "/project-images/news-feed-images/main-image.png",
  },
  mirageStore: {
    name: "Mirage Kitchen Store",
    description: "An e-commerce application built with React and Firebase",
    link: "miragestore",
    imageLink: "/project-images/mirage-kitchen-images/main-page.png",
  },
};
