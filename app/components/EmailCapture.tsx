import Image from "next/image";
import { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { emailCapture, colors } from "../config/siteConfig";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Create styles using colors from config
  const styles = useMemo(
    () => ({
      headerBg: `bg-gradient-to-r from-[${colors.dark}] to-[${colors.primary}]`,
      headerBorder: `border-[${colors.black}]`,
      mainBg: `bg-[${colors.light}]`,
      highlightText: `text-[${colors.accent}]`,
      inputFocus: `focus:border-[${colors.primary}] focus:ring-[${colors.primary}]/20`,
      buttonBg: `bg-[${colors.primary}]`,
      buttonHover: `hover:bg-[${colors.dark}]`,
      successIconBg: `bg-[${colors.accent}]/20`,
      successIconColor: `text-[${colors.accent}]`,
    }),
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Submit email to the API route that will add it to Notion
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      // Success! Show the success message
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting email:", err);
      setError(
        typeof err === "object" && err !== null && "message" in err
          ? (err as Error).message
          : "Failed to subscribe. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="notify" className="mb-16 overflow-hidden rounded-xl shadow-lg">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#1A3A3A] to-[#2F4238] text-white py-9 px-8">
        <h2 className="text-3xl font-bold mb-2 text-center tracking-tight text-white">
          {emailCapture.title}
        </h2>
      </div>

      {/* Main cta Area */}
      <div className="bg-[#F5F1E6] shadow-sm rounded-b-xl overflow-hidden">
        <div className="md:flex">
          {/* Left Side - Image */}
          <div className="md:w-1/2 relative hidden md:block">
            <div className="relative min-h-[500px] w-full flex items-center justify-center">
              <Image
                src={emailCapture.image}
                alt="Lazy Surf Bag on beach"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={95}
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
                    {emailCapture.description.before}
                    <span className={`font-semibold ${styles.highlightText}`}>
                      {emailCapture.description.highlight}
                    </span>
                    {emailCapture.description.after}
                  </p>
                  <input
                    type="email"
                    placeholder={emailCapture.placeholder}
                    className={`w-full px-4 py-4 border-2 border-gray-300 rounded-lg ${styles.inputFocus} focus:ring-2 outline-none transition-all text-base shadow-sm`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${styles.buttonBg} text-white px-8 py-3.5 rounded-full text-lg font-semibold ${styles.buttonHover} transition-all shadow-md flex items-center justify-center hover:translate-y-[-2px] disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? "Submitting..." : emailCapture.ctaText}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                </button>
                {error && (
                  <p className="text-red-500 text-sm mt-2 text-center">
                    {error}
                  </p>
                )}
                <p className="text-xs text-gray-500 text-center mt-4">
                  {emailCapture.stats}
                </p>
              </form>
            ) : (
              <div className="py-12">
                <div
                  className={`w-16 h-16 ${styles.successIconBg} rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-10 w-10 ${styles.successIconColor}`}
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
