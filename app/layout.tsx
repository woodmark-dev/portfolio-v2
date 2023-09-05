import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

export const metadata = {
  title: "Dari Ibrahim Ayuba",
  description:
    "A porfolio website for Dari Ibrahim Ayuba. A full-stack developer with Next.js and Nest.js skills",
};

type RootProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <main className="bg-backgroundColor text-textColor">
          {children}
          <section id="contact" className="mb-10 watch px-6 md:px-12 mt-32">
            <Contact />
          </section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
