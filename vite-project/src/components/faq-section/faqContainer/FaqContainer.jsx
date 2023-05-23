import React from "react";
import "./FaqContainer.css";

const FaqContainer = ({ item }) => {
  const updateFaq = (e) => {
    let target = e.target;
    if (target.nodeName != "BUTTON") {
      target = target.parentElement;
    }

    const answers = document.querySelectorAll(".gaming__faq-answer");
    const arrowIcon = target.firstChild;
    const arrowIcons = document.querySelectorAll(
      ".gaming__faq-down-arrow-icon"
    );
    const answerEl = target.parentElement.nextElementSibling;

    answers.forEach((answer, i) => {
      if (answer != answerEl) {
        const arrowIcon = arrowIcons[i];
        answer.classList.add("gaming__faq-answer-hidden");
        arrowIcon.style.transform = "rotate(0deg)";
      }
    });

    answerEl.classList.toggle("gaming__faq-answer-hidden");
    const answerHidden = answerEl.classList.contains(
      "gaming__faq-answer-hidden"
    );
    if (!answerHidden) {
      arrowIcon.style.transform = "rotate(180deg)";
    } else {
      arrowIcon.style.transform = "rotate(0deg)";
    }
  };

  return (
    <div className="gaming__faq-container">
      <div className="gaming__question-container">
        <p className="gaming__faq-question">{item.q}</p>
        <button className="gaming__faq-btn" onClick={(e) => updateFaq(e)}>
          <ion-icon
            class="gaming__faq-down-arrow-icon"
            name="chevron-down-outline"
          ></ion-icon>
        </button>
      </div>
      <p className="gaming__faq-answer gaming__faq-answer-hidden">{item.a}</p>
    </div>
  );
};

export default FaqContainer;
