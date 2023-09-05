import MainProject from "@/components/projectComponents/mainProject";

export default function Uduscare() {
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
  name: "UdusCare",
  introduction:
    "UdusCare is a web application for booking hospital appointments, equipped with data encryption. I developed it using Next.js for the frontend and Nest.js for the backend. Users can easily register, verify their email, change passwords, book appointments, and more. Additionally, separate dashboards are available for doctors, test technicians, and pharmacists to view and manage appointments.",
  purposeAndGoals:
    "Storing user data in plain text exposes them to data breaches and other security risks. This web application utilizes the Advanced Encryption Standard to encrypt user data before storing it in the database. This advantage ensures that even if a hacker gains access to the database, the encrypted data, including emails and names, would be meaningless to the attacker. Moreover, it offers a user-friendly interface that simplifies the process of booking hospital appointments.",
  challengingAspects:
    "To achieve data encryption and decryption, the backend employs the Advanced Encryption Standard provided by the Ethereum-cryptography library. One of the most difficult aspects of this project was devising a strategy for encrypting and decrypting the data. Additionally, finding a suitable library and configuring it to suit the software's requirements proved to be challenging.",
  choicesOfTechnology: [
    "I opted for the Ethereum-cryptography library due to its lightweight nature and extensive capabilities in handling complex cryptography algorithms.",
    "On the backend, Nest.js was chosen to enforce type safety using TypeScript and provide a robust architecture for easy maintenance and scalability. I think of it as an enhanced version of Express.js.",
    "Prisma, a powerful database abstraction layer, facilitated database interaction without the need to write SQL code.",
    "For the frontend, Next.js was employed, which not only offers excellent code organization but also provides additional features like image optimization and routing that are not available in React.js.",
  ],
  stack: [
    "Next",
    "Nest",
    "Tailwind",
    "TypeScript",
    "Prisma",
    "Ethereum-cryptography Library",
  ],
  links: [
    { href: "https://uduscare-frontend.vercel.app/", label: "View Live Site" },
    {
      href: "https://github.com/woodmark-dev/uduscare-frontend",
      label: "View Github Repo",
    },
  ],
  lessonsLearned:
    "This project has significantly improved my ability to comprehend and apply documentation. The various obstacles encountered during the development process have enhanced my cognitive and creative coding skills. Moreover, I have gained valuable experience working with Next.js and Nest.js, which are exceptional tools for building scalable and maintainable full-stack web applications.",
  mainImage: {
    src: "/project-images/udus-care-images/uduscare-1.png",
    alt: "main image",
  },
  image1: {
    src: "/project-images/udus-care-images/uduscare-2.png",
    alt: "database image",
  },
  image2: {
    src1: "/project-images/udus-care-images/uduscare-4.png",
    alt1: "Pending appointments image",
    src2: "/project-images/udus-care-images/uduscare-5.png",
    alt2: "doctor appointments image",
  },
};
