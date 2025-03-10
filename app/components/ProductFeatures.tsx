import { Check } from "lucide-react";
import { productFeatures, colors } from "../config/siteConfig";

export default function ProductFeatures() {
  return (
    <section className="mb-16 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center tracking-tight">
        {productFeatures.title}
      </h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <ul className="space-y-4 flex flex-col items-center justify-center">
          {productFeatures.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check
                className={`h-6 w-6 text-[${colors.accent}] flex-shrink-0`}
              />
              <span className="text-lg">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <div className="relative w-[280px] h-[580px] rounded-[2rem] overflow-hidden shadow-lg bg-black border-8 border-black">
            <video
              controls
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={productFeatures.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
