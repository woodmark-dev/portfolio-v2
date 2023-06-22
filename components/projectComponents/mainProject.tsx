import Description from "./description";
import Description2 from "./description2";
import Images from "./images";
import Images2 from "./images2";
import Introduction from "./intro";
import MainMarkup from "./mainMarkup";
import { IntroProps } from "./intro";
import { MarkupProps } from "./mainMarkup";
import { Desc1Props } from "./description";
import { Image1Props } from "./images";
import { Desc2Props } from "./description2";
import { Image2Props } from "./images2";

type MainProjectProps = IntroProps &
  MarkupProps &
  Desc1Props &
  Image1Props &
  Desc2Props &
  Image2Props;

export default function MainProject({
  name,
  intro,
  stack,
  links,
  mSrc,
  mAlt,
  challengingAspects,
  purposeAndGoals,
  img1src,
  img1alt,
  lessonsLearned,
  choicesOfTechnology,
  img2src1,
  img2alt1,
  img2src2,
  img2alt2,
}: MainProjectProps) {
  return (
    <div className="min-h-screen flex flex-col gap-20 mb-32 animate-[sections_1s_both]">
      <section className="mt-10">
        <Introduction intro={intro} stack={stack} links={links} name={name} />
      </section>
      <section className="flex justify-center">
        <MainMarkup mSrc={mSrc} mAlt={mAlt} />
      </section>
      <section>
        <Description
          challengingAspects={challengingAspects}
          purposeAndGoals={purposeAndGoals}
        />
      </section>
      <section>
        <Images img1src={img1src} img1alt={img1alt} />
      </section>
      <section>
        <Description2
          lessonsLearned={lessonsLearned}
          choicesOfTechnology={choicesOfTechnology}
        />
      </section>
      <section>
        <Images2
          img2src1={img2src1}
          img2alt1={img2alt1}
          img2src2={img2src2}
          img2alt2={img2alt2}
        />
      </section>
    </div>
  );
}
