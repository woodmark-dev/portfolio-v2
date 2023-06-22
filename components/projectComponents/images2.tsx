import Image from "next/image";

export interface Image2Props {
  img2src1: string;
  img2alt1: string;
  img2src2: string;
  img2alt2: string;
}

export default function Images2({
  img2src1,
  img2alt1,
  img2src2,
  img2alt2,
}: Image2Props) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
      <div>
        <Image
          width={1000}
          height={1000}
          src={img2src1}
          alt={img2alt1}
          className="w-full"
        />
      </div>
      <div>
        <Image
          width={1000}
          height={1000}
          src={img2src2}
          alt={img2alt2}
          className="w-full"
        />
      </div>
    </div>
  );
}
