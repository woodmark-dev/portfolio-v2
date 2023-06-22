import Image from "next/image";

export interface Image1Props {
  img1src: string;
  img1alt: string;
}

export default function Images({ img1src, img1alt }: Image1Props) {
  return (
    <div>
      <div className="flex justify-center">
        <Image
          width={2000}
          height={2000}
          src={img1src}
          alt={img1alt}
          className="md:w-[70%]"
        />
      </div>
    </div>
  );
}
