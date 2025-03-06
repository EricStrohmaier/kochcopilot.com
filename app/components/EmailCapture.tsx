import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { emailCapture, colors } from "../config/siteConfig";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="notify" className="mb-16 overflow-hidden rounded-xl shadow-lg">
      {/* Header Banner */}
      <div className={`bg-gradient-to-r from-[${colors.dark}] to-[${colors.primary}] text-white py-9 px-8 border-b border-[${colors.black}]`}>
        <h2 className="text-3xl font-bold mb-2 text-center tracking-tight text-white">
          {emailCapture.title}
        </h2>
      </div>

      {/* Main cta Area */}
      <div className={`bg-[${colors.light}] shadow-sm rounded-b-xl overflow-hidden`}>
        <div className="md:flex">
          {/* Left Side - Image */}
          <div className="md:w-1/2 relative hidden md:block">
            <div className="relative h-72 md:h-full overflow-hidden">
              <Image
                src={emailCapture.image}
                alt="Lazy Surf Bag on beach"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Form & Details */}
          <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {emailCapture.heading}
                  </h3>
                  <p className="text-gray-600 mb-7 leading-relaxed">
                    {emailCapture.description.split("exclusive 10% discount")[0]}
                    <span className={`font-semibold text-[${colors.accent}]`}>
                      exclusive 10% discount
                    </span>
                    {emailCapture.description.split("exclusive 10% discount")[1]}
                  </p>
                  <input
                    type="email"
                    placeholder={emailCapture.placeholder}
                    className={`w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[${colors.primary}] focus:ring-2 focus:ring-[${colors.primary}]/20 outline-none transition-all text-base shadow-sm`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full bg-[${colors.primary}] text-white px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-[${colors.dark}] transition-all shadow-md flex items-center justify-center hover:translate-y-[-2px]`}
                >
                  {emailCapture.ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  {emailCapture.stats}
                </p>
              </form>
            ) : (
              <div className="py-12">
                <div className={`w-16 h-16 bg-[${colors.accent}]/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-10 w-10 text-[${colors.accent}]`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                  {emailCapture.successHeading}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {emailCapture.successMessage}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
