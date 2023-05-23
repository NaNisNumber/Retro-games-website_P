import React from "react";
import "./FaqSection.css";
import FaqContainer from "./faqContainer/FaqContainer";
import { nanoid } from "nanoid";
export const FaqSection = () => {
  const faqData = [
    {
      q: "Q: When do I receive my product?",
      a: "A: It will take between 2-3 working days",
    },
    {
      q: "Q: Can the product be returned?",
      a: "A: Yes, you can return it in the first 48 hours after we get notified about the receiving of the product",
    },
    {
      q: "Q: You only sell products through online store or is there a physycal one?",
      a: "A: At the moment orders can only be placed online",
    },
  ];
  return (
    <section className="gaming__faq-section">
      <main className="gaming__faq-main-container">
        <p className="gaming__faq-text">FAQ</p>
        {faqData.map((item) => (
          <FaqContainer key={nanoid()} item={item} />
        ))}
      </main>
    </section>
  );
};
