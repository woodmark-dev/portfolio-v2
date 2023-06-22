import MainProject from "@/components/projectComponents/mainProject";

export default function MirageStore() {
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
  name: "Mirage Kitchen Store",
  introduction:
    "Mirage Kitchen Store is an e-commerce web application that I developed using React, Redux, and Firebase. The app enables users to log in, browse through products, add items to their carts, mark favorites, and place orders through Stripe. From maintaining a universal cart to updating the database with the cart stored locally (if any), this React project was both enjoyable and challenging to build.",
  purposeAndGoals:
    "Around eight months ago, Mirage Kitchen Store marked one of my initial ventures into React projects. The aim of this application was to apply the knowledge I had accumulated over months of learning JavaScript and React. I wanted to gain hands-on experience with concepts such as global state management, single-page application (SPA) routing, and building components using JSX. The project's level of difficulty was moderate, striking a balance that allowed me to grasp these concepts without feeling overwhelmed.",
  challengingAspects:
    "One of the primary challenges of this web app involved synchronizing the cart stored in local storage with the one in the database when a user logs in. This entailed replacing duplicate products in the database with the most up-to-date ones from local storage, as well as adding any products from local storage that were not originally present in the database.",
  choicesOfTechnology: [
    "React simplifies the process of constructing high-performance web components. Additionally, it facilitates state management across components through the use of hooks.",
    "While React offers the Context API for managing application data, such as cart items, in a top-level component, it can be inefficient for large projects as it triggers a complete application re-render whenever any data changes. Therefore, I opted for Redux, a lightweight library that provides better handling of global state.",
    "The NoSQL Firebase database integrates seamlessly with React applications.",
    "As React lacks its own routing system, React Router proved to be a valuable tool.",
  ],
  stack: ["React", "Firebase", "Tailwind", "Redux", "JavaScript"],
  links: [
    { href: "https://mirage-ks.netlify.app/", label: "View Live Site" },
    {
      href: "https://github.com/woodmark-dev/mirage-kitchen-store",
      label: "View Github Repo",
    },
  ],
  lessonsLearned:
    "This project served as a practical application of what I had learned. It afforded me a deeper understanding of building SPAs, implementing routing (using React Router), managing global state, and working with JSX and hooks.",
  mainImage: {
    src: "/project-images/mirage-kitchen-images/main-page.png",
    alt: "main image",
  },
  image1: {
    src: "/project-images/mirage-kitchen-images/mirage-e-commerce.jpg",
    alt: "Main page",
  },
  image2: {
    src1: "/project-images/mirage-kitchen-images/cart-page.png",
    alt1: "Order page",
    src2: "/project-images/mirage-kitchen-images/favorite-page.png",
    alt2: "Fovorites page",
  },
};
