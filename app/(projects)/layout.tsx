import Contact from "@/components/contact";
import Header2 from "@/components/header2";

type Props = {
  children: React.ReactNode;
};

export default function ProjectLayout({ children }: Props) {
  return (
    <div>
      <Header2 />
      <div className="md:px-12 px-6">{children}</div>
    </div>
  );
}
