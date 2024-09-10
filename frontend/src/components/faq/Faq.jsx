import React, { useState } from 'react';
import './faq.css';
import { questions, answers } from './data';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <h2>Frequently Asked <span>Questions</span></h2>
            <div className="faq-container">
                {questions.map((question, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleAnswer(index)}>
                            {question}
                            <span className={`arrow ${activeIndex === index ? 'minus' : 'plus'}`}></span>
                        </div>
                        <div className={`faq-answer ${activeIndex === index ? 'visible' : ''}`}>
                            {answers[index]}
                        </div>
                    </div>
                ))}
            </div>
            <div className="faq-footer">
                Still have questions? <button><span>Contact us</span></button>
            </div>
        </section>
    );
};

export default Faq;
