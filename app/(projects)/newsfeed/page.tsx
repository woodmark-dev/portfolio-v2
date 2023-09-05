import MainProject from "@/components/projectComponents/mainProject";

export default function NewsFeed() {
  return (
    <MainProject
      name={contents.name}
      intro={contents.introduction}
      stack={contents.stack}
      links={contents.links}
      mAlt={contents.mainImage.alt}
      mSrc={contents.mainImage.src}
      purposeAndGoals={contents.purposeAndGoals}
      challengingAspects={contents.challengingAspects}
      img1src={contents.image1.src}
      img1alt={contents.image1.alt}
      choicesOfTechnology={contents.choicesOfTechnology}
      lessonsLearned={contents.lessonsLearned}
      img2src1={contents.image2.src1}
      img2alt1={contents.image2.alt1}
      img2src2={contents.image2.src2}
      img2alt2={contents.image2.alt2}
    />
  );
}

const contents = {
  name: "NewsFeed",
  introduction:
    "NewsFeed is a platform dedicated to delivering news to students. It enables users to create and share news content, view news from others, and engage through comments. Additionally, the platform incorporates an infinite scroll feature to optimize performance. I developed this application utilizing Nest.js and Next.js frameworks.",
  purposeAndGoals:
    "During my time in college, I encountered challenges in staying informed about the latest happenings on campus, aside from relying on Facebook and searching for Pen Press—a recognized news outlet within the university. The primary purpose of this application is to establish a centralized platform within the university community, facilitating the sharing and accessibility of relevant news, updates, and information.",
  challengingAspects:
    "One of the challenging aspects I encountered was implementing the infinite scroll feature. I aimed to accomplish this without resorting to copying and pasting code snippets from external sources. Another difficulty arose during the implementation of image uploading, particularly in the context of Nest.js.",
  choicesOfTechnology: [
    "By utilizing Nest.js, I benefited from a scalable, modular, and efficient framework that harnesses the power of TypeScript while adhering to a well-structured architecture. It greatly facilitated the development of APIs.",
    "As a framework built on top of React, Next.js offered an exceptional developer experience during the frontend development process.",
    "Prisma played a pivotal role in simplifying database access and management, significantly enhancing my overall productivity.",
  ],
  stack: ["Next", "Nest", "Tailwind", "TypeScript", "Prisma"],
  links: [
    {
      href: "https://news-feed-brhrh7ffp-woodmark-dev.vercel.app/",
      label: "View Live Site",
    },
    {
      href: "https://github.com/woodmark-dev/news-feed",
      label: "View Github Repo",
    },
  ],
  lessonsLearned:
    "Throughout this project, I deepened my understanding of Next.js and Nest.js. I gained valuable insights into implementing infinite scrolling from scratch, as well as utilizing existing libraries for the same purpose. Furthermore, I have become well-versed in the implementation of image uploads.",
  mainImage: {
    src: "/project-images/news-feed-images/main-image.png",
    alt: "main image",
  },
  image1: {
    src: "/project-images/news-feed-images/news-feed-main.png",
    alt: "News feed image",
  },
  image2: {
    src1: "/project-images/news-feed-images/admin-dashboard.png",
    alt1: "Admin dashboard",
    src2: "/project-images/news-feed-images/user-profile2.png",
    alt2: "User Profile",
  },
};
