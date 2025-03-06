import Image from "next/image";
import { hero } from "../config/siteConfig";

type HeroSectionProps = {
  onClickCta: () => void;
};

export default function HeroSection({ onClickCta }: HeroSectionProps) {
  return (
    <section className="text-center mb-14">
      <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight">
        {hero.title}
      </h1>
      <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
        {hero.description}
      </p>
      <div className="mb-8">
        <Image
          src={hero.image}
          alt="Lazy Surf Bags Collection"
          width={500}
          height={500}
          className="mx-auto rounded-lg"
        />
      </div>
      <button
        onClick={onClickCta}
        className="bg-[#2F4238] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#1A3A3A] transition-colors shadow-md inline-flex items-center"
      >
        {hero.ctaText}
      </button>
    </section>
  );
}
