import { finalCta, colors } from "../config/siteConfig";

type FinalCtaProps = {
  onClickCta: () => void;
};

export default function FinalCta({ onClickCta }: FinalCtaProps) {
  return (
    <section className={`mb-16 bg-[${colors.lightAlt}] py-14 px-8 rounded-xl text-center shadow-sm border border-[${colors.lightAlt}]/80`}>
      <h2 className="text-3xl font-bold mb-4">
        {finalCta.title}
      </h2>
      <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
        {finalCta.description}
      </p>
      <button
        onClick={onClickCta}
        className={`bg-[${colors.accent}] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[${colors.accent}]/90 transition-colors shadow-md mx-auto inline-flex items-center`}
      >
        {finalCta.ctaText}
      </button>
    </section>
  );
}
