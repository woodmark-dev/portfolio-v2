import Image from "next/image";

export interface MarkupProps {
  mSrc: string;
  mAlt: string;
}

export default function MainMarkup({ mSrc, mAlt }: MarkupProps) {
  return (
    <div className="mockup-window border border-base-300 md:w-[60vw]">
      <div className="border-t border-base-300">
        <Image
          width={1000}
          height={1000}
          src={mSrc}
          alt={mAlt}
          className="w-full"
        />
      </div>
    </div>
  );
}
