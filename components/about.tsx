import Image from "next/image";
export default function About() {
  return (
    <div>
      <h1 className="text-3xl mb-5 font-bold">About</h1>
      <div className="flex md:flex-row flex-col md:gap-20 gap-10">
        <div className="flex flex-col gap-3 md:w-[50vw]">
          {contents.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>

        <div className="avatar">
          <div className="md:w-96 mask mask-squircle">
            <Image
              width={400}
              height={400}
              alt="my-photo"
              src="/head-shot.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const contents = [
  "Hey there, I'm Ibrahim, a Computer Science graduate and programmer who's passionate about crafting amazing things with code.",
  "Ever since my dad brought an old computer into our house in 2005, my curiosity about how computers work has been insatiable. After completing high school, I had a strong desire to enroll in a practical coding school led by a group of talented individuals from India. My aim was to earn a diploma in Software Engineering, and I was fortunate to receive scholarships covering over 50% of the tuition. This accomplishment filled me with immense pride, as I could clearly see my dream of becoming a programmer becoming a reality within the next three years.",
  "However, my parents had a different vision for my future. They believed it would be more beneficial for me to pursue a degree instead. The first two years of college didn't quite live up to my expectations in terms of coding-related activities. The curriculum predominantly focused on mathematics, physics, and other science subjects, leaving little room for coding engagements. It wasn't until my third year that I took matters into my own hands and began self-learning HTML, CSS, and Javascript. Since then, I've never looked back.",
  "In addition to programming, I have a deep passion for exploring new web technologies and expressing myself through writing. I'm also a huge fan of Marvel. However, I must admit that their post-2019 movies, with the exception of 'Wakanda Forever,' haven't quite impressed me as much. Nevertheless, I always keep a keen eye on their latest releases.",
];
