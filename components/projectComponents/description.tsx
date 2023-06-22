export interface Desc1Props {
  purposeAndGoals: string;
  challengingAspects: string;
}

export default function Description({
  challengingAspects,
  purposeAndGoals,
}: Desc1Props) {
  return (
    <div className="flex md:flex-row flex-col gap-10 md:gap-0 justify-between">
      <div className="md:w-[48%]">
        <h1 className="text-xl mb-5 font-bold">Purpose and Goals</h1>
        <p>{purposeAndGoals}</p>
      </div>
      <div className="md:w-[48%]">
        <h1 className="text-xl mb-5 font-bold">Challenging Aspects</h1>
        <p>{challengingAspects}</p>
      </div>
    </div>
  );
}
