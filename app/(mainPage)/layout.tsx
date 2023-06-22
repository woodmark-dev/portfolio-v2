import Header from "@/components/header";

type Props = {
  children: React.ReactNode;
};

export default function MainPageLayout({ children }: Props) {
  return (
    <div>
      <Header />
      <main className="bg-backgroundColor text-textColor md:px-12 px-6">
        {children}
      </main>
    </div>
  );
}
