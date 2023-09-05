import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer p-6 bg-backgroundColor text-textColor flex items-center justify-between">
      <div className="text-2xl font-extrabold">
        {" "}
        <Image
          width={120}
          height={120}
          src="/portfolio-logo.svg"
          alt="portfolio logo"
        />
      </div>
      <div className="text-center">
        <p>Designed and Built by Dari Ibrahim Ayuba</p>
      </div>
      <div></div>
    </footer>
  );
}
