import { useState } from "react";
import { scrollToSection } from "../../../lib/utils";

const faqs = [
    {
      id: 1,
      question: "How can I book an appointment?",
      answer: (
        <>
          You can book an appointment by visiting our Booking Page, selecting your
          preferred service and time slot, and completing the form. <br />
          Once submitted, you’ll receive a confirmation email with the details. <br /><br />
          If these packages are not the perfect fit, please book a free quote <button onClick={() => scrollToSection("contact-section")}><strong className="hover:underline">online</strong></button>  or call at:{" "}
          <strong>+1 (805) 367-6565</strong>
        </>
      ),
    },
    {
      id: 2,
      question: "How long will the detailing take?",
      answer: (
        <>
          The duration of the detailing service varies depending on the type of
          vehicle and the service package selected. <br />
          On average, it can take anywhere from 1-4 hours. <br /><br />
          Please contact us for a more accurate estimate based on your specific needs.
        </>
      ),
    },
    {
      id: 3,
      question: "Where do you provide the detailing service?",
      answer: (
        <>
          We offer car detailing at your home, office, or any location that is convenient for you. Our professional detailers will come to you, ensuring a hassle-free experience.
        </>
      ),
    },
    {
      id: 4,
      question: "How should I prepare my vehicle for detailing?",
      answer: (
        <>
            To ensure the best results, we recommend removing all personal items from your vehicle, including trash, valuables, and any loose objects. This allows our detailers to focus on every detail of your vehicle. <br/><br/>If you're having interior detailing, it helps to clear the seats and floor areas. We’ll take care of the rest.
        </>
      ),
    },
  ];

export const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="md:pt-50 pb-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h6 className="text-lg text-[#AA0606] font-medium mb-2">FAQs</h6>
          <h2 className="text-4xl md:text-5xl font-manrope font-black text-white leading-[3.25rem]">
            FREQUENTLY ASKED QUESTIONS.
          </h2>
        </div>

        <div className="accordion-group">
          {faqs.map(({ id, question, answer }) => (
            <div
              key={id}
              className={`accordion py-8 px-6 border-b text-xl border-gray-900 transition-all duration-500 rounded-2xl hover:bg-black ${
                openId === id ? "bg-black" : ""
              }`}
            >
              <button
                className={`accordion-toggle group inline-flex items-center justify-between w-full text-left font-bold text-white transition duration-300${
                  openId === id ? "font-medium text-black" : ""
                }`}
                onClick={() => toggle(id)}
              >
                <h5>{question}</h5>
                <svg
                  className={`transition-transform duration-300 transform ${
                    openId === id ? "rotate-180 text-[#AA0606]" : "text-white"
                  }`}
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {openId === id && (
                <div className="accordion-content mt-4">
                  <p className="text-base text-lg text-gray-300 leading-6">{answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
