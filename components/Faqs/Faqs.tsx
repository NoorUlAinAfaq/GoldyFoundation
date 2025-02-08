"use client";
import React, { useState } from "react";
import SingleFaq from "./SingleFaq";
import faqimg from "../../public/FAQ.svg";
import Image from "next/image";
import faqimage from "../../public/FAQ.jpg";

interface Faq {
  queNo: number;
  question: string;
  answer: string;
}

interface FaqsProps {
  faqs: Faq[];
}

const Faqs = ({ faqs }: FaqsProps) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(-1);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(index === openFaqIndex ? -1 : index);
  };

  return (
    <section className="main-container md:grid grid-cols-2 md:mt-40" id="faq">
      <div className="" data-aos="fade-up">
        <h2 className="lg:text-6xl text-4xl font-bold mb-4 text-white">FAQS</h2>
        {faqs?.map((faq, i) => (
          <SingleFaq
            key={i}
            faq={faq}
            isOpen={i === openFaqIndex}
            toggleFaq={() => toggleFaq(i)}
          />
        ))}
      </div>
      <div className="md:flex md:ml-24 md:pt-16 md:justify-center hidden">
        <Image
          src={faqimage}
          alt="faqImage"
          className=" h-[460px] w-[450px] rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Faqs;
