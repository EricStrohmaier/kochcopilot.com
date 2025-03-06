import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs, colors } from "../config/siteConfig";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0); // Default to having the first FAQ open

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? -1 : index); // Close if already open, otherwise open clicked item
  };

  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center tracking-tight">
        {faqs.title}
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.questions.map((faq, index) => (
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
                <ChevronUp className={`h-5 w-5 text-[${colors.accent}] transition-transform duration-200`} />
              ) : (
                <ChevronDown className={`h-5 w-5 text-[${colors.accent}] transition-transform duration-200`} />
              )}
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openFaq === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-5 bg-white border-t border-gray-200">
                {typeof faq.answer === 'string' ? (
                  <p>{faq.answer}</p>
                ) : (
                  <>
                    <p>{faq.answer.text}</p>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      {faq.answer.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    {faq.answer.conclusion && (
                      <p className="mt-2">{faq.answer.conclusion}</p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
