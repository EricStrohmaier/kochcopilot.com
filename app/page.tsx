"use client";

import type React from "react";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, ChevronUp } from "lucide-react";

// Add Inter font for more consistent typography
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0); // Default to having the first FAQ open

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? -1 : index); // Close if already open, otherwise open clicked item
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`min-h-screen bg-[#F5F1E6] ${inter.className}`}>
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <section className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Lazy Surf Bags – The Easiest Surfboard Cover
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            Durable, lightweight, and hassle-free. Protect your board
            effortlessly. Rolling out to surf spots nationwide!
          </p>
          <div className="mb-8">
            <Image
              src="/425755979_373115395446132_1060713950576099027_n.jpg"
              alt="Lazy Surf Bags Collection"
              width={500}
              height={500}
              className="mx-auto rounded-lg"
            />
          </div>
          <button
            onClick={() =>
              document
                .getElementById("notify")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#2F4238] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#1A3A3A] transition-colors shadow-md inline-flex items-center"
          >
            Get Notified When Available & Save 10%
          </button>
        </section>

        {/* What Is Lazy Surf Bag? */}
        <section className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center tracking-tight">
            What Is Lazy Surf Bag?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ul className="space-y-4">
              {[
                "Protects your board from dings & UV rays",
                "Lightweight, stretchy, & easy to slip on",
                "Available in multiple sizes",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-6 w-6 text-[#C76F41] flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-md">
              <video
                controls
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/lazy-surf-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Email Capture Section */}
        <section
          id="notify"
          className="mb-16 overflow-hidden rounded-xl shadow-lg"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#1A3A3A] to-[#2F4238] text-white py-9 px-8 border-b border-[#1C1C1C]">
            <h2 className="text-3xl font-bold mb-2 text-center tracking-tight text-white">
              Be the first to know when available in your area!
            </h2>
          </div>

          {/* Main cta Area */}
          <div className="bg-[#F5F1E6] shadow-sm rounded-b-xl overflow-hidden">
            <div className="md:flex">
              {/* Left Side - Image */}
              <div className="md:w-1/2 relative hidden md:block">
                <div className="relative h-72 md:h-full overflow-hidden">
                  <Image
                    src="/426060699_1082809579424536_6285010735065195148_n.jpg"
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
                        Join the VIP Pre-Launch List
                      </h3>
                      <p className="text-gray-600 mb-7 leading-relaxed">
                        Be the first to know when we launch and receive an{" "}
                        <span className="font-semibold text-[#C76F41]">
                          exclusive 10% discount
                        </span>{" "}
                        on your first purchase.
                      </p>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#2F4238] focus:ring-2 focus:ring-[#2F4238]/20 outline-none transition-all text-base shadow-sm"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-[#2F4238] text-white px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-[#1A3A3A] transition-all shadow-md flex items-center justify-center hover:translate-y-[-2px]"
                    >
                      Get Early Access & 10% Off
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-4">
                      Join 500+ surfers already on the waiting list
                    </p>
                  </form>
                ) : (
                  <div className="py-12">
                    <div className="w-16 h-16 bg-[#C76F41]/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-[#C76F41]"
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
                      Thanks! You're on the List!
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      We'll email you when Lazy Surf Bags are available in your
                      area with your exclusive 10% discount code. No spam, we
                      promise.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How does the Lazy Surf Bag work?",
                answer:
                  "Our patented design uses stretchy, durable fabric with an innovative application method. Unlike traditional board socks that you have to struggle to pull on, the Lazy Surf Bag slips over your board in seconds. Just place one end on the nose, pull the other end over the tail, and you're done!",
              },
              {
                question: "What sizes are available?",
                answer: (
                  <>
                    <p>We offer four sizes to fit most surfboards:</p>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>Small: 5'8" - 6'2"</li>
                      <li>Medium: 6'3" - 7'0"</li>
                      <li>Large: 7'1" - 8'0"</li>
                      <li>X-Large: 8'1" - 9'6"</li>
                    </ul>
                    <p className="mt-2">
                      If you're between sizes, we recommend sizing up for a
                      better fit.
                    </p>
                  </>
                ),
              },
              {
                question: "When will Lazy Surf Bags be available in my area?",
                answer:
                  "We're currently rolling out to different surf regions in phases. Sign up to be notified when we're available in your area, expected around June 2024. You'll receive an email with a special discount code when we launch near you.",
              },
              {
                question: "How do I care for my Lazy Surf Bag?",
                answer:
                  "The Lazy Surf Bag is machine washable in cold water. We recommend washing on a gentle cycle and hanging to dry. Do not iron or use bleach. Rinse with fresh water after use in salt water to prolong the life of your bag.",
              },
              {
                question: "What is your return policy?",
                answer:
                  "We offer a 30-day money-back guarantee on all our products. If you're not completely satisfied with your Lazy Surf Bag, you can return it within 30 days of receipt for a full refund. Please note that the item must be in its original condition. Shipping costs for returns are the responsibility of the customer.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-[#C76F41] transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#C76F41] transition-transform duration-200" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 bg-[#F5F1E6] border-t border-gray-200">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Testimonials */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center tracking-tight">
            What Surfers Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#EAD8C0] p-6 rounded-lg text-center relative shadow-sm border border-[#EAD8C0]/80">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-sm">
                <Image
                  src="/471399929_623382030026228_1411957194752309130_n.jpg"
                  alt="Alex testimonial"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-10">
                <p className="text-lg italic mb-4 text-gray-700 leading-relaxed">
                  "The best board cover I've ever used. Super easy and
                  protective!"
                </p>
                <p className="font-semibold">Alex R.</p>
                <p className="text-sm text-gray-500">Professional Surfer</p>
              </div>
            </div>
            <div className="bg-[#EAD8C0] p-6 rounded-lg text-center relative shadow-sm border border-[#EAD8C0]/80">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-sm">
                <Image
                  src="/471506815_1282322243216161_7265080810814573711_n.jpg"
                  alt="Sarah testimonial"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-10">
                <p className="text-lg italic mb-4 text-gray-700 leading-relaxed">
                  "I can protect my board in seconds with this thing. Total game
                  changer!"
                </p>
                <p className="font-semibold">Sarah M.</p>
                <p className="text-sm text-gray-500">Surf Instructor</p>
              </div>
            </div>
            <div className="bg-[#EAD8C0] p-6 rounded-lg text-center relative shadow-sm border border-[#EAD8C0]/80">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-sm">
                <Image
                  src="/471547419_1264495837990213_1465657528673896189_n.jpg"
                  alt="Jason testimonial"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-10">
                <p className="text-lg italic mb-4 text-gray-700 leading-relaxed">
                  "Worth every penny. No more sun damage to my favorite board!"
                </p>
                <p className="font-semibold">Jason W.</p>
                <p className="text-sm text-gray-500">Weekend Warrior</p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-700 font-medium mt-10">
            30-day money-back guarantee. No questions asked.
          </p>
        </section>

        {/* Final CTA Section */}
        <section className="mb-16 bg-[#EAD8C0] py-14 px-8 rounded-xl text-center shadow-sm border border-[#EAD8C0]/80">
          <h2 className="text-3xl font-bold mb-4">
            Ready for a Better Surfboard Cover?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Be the first to know when Lazy Surf Bags are available in your area!
          </p>
          <button
            onClick={() =>
              document
                .getElementById("notify")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#C76F41] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#C76F41]/90 transition-colors shadow-md mx-auto inline-flex items-center"
          >
            Get Notified When Available & Save 10%
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A3A3A] py-12 border-t border-[#1C1C1C]">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-5 text-white">
            Contact:{" "}
            <a
              href="mailto:hello@lazysurf.com"
              className="hover:text-[#C76F41] transition-colors text-[#F5F1E6]"
            >
              hello@lazysurf.com
            </a>
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="#"
              className="text-[#F5F1E6] hover:text-[#C76F41] transition-colors font-medium"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-[#F5F1E6] hover:text-[#C76F41] transition-colors font-medium"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-[#F5F1E6] hover:text-[#C76F41] transition-colors font-medium"
            >
              Twitter
            </a>
          </div>
          <p className="text-sm text-[#EAD8C0]">
            © 2024 Lazy Surf Bags. All rights reserved.
            <a href="#" className="ml-4 hover:text-[#C76F41] transition-colors text-[#F5F1E6]">
              Privacy Policy
            </a>
            <a href="#" className="ml-4 hover:text-[#C76F41] transition-colors text-[#F5F1E6]">
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
