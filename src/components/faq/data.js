import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        "Is there a free trial available?",
        "How can I contact customer support?",
        "Are there any system requirements for using this product/service?",
        "How secure is my data with this product/service?",
        "Can I integrate this product/service with other tools or platforms?"
    ];

    const answers = [
        "Yes, we offer a free trial for [number] days. You can explore all the features and benefits of our product/service during this period without any commitment.",
        "You can contact our customer support team via email at [support@example.com], through our live chat feature on the website, or by calling [phone number]. Our support team is available [days and hours].",
        "Yes, our product/service requires [system requirements]. For a complete list of system requirements and compatibility information, please check our technical specifications page.",
        "We take data security very seriously. Our product/service employs advanced encryption and security protocols to ensure that your data is protected and kept confidential.",
        "Yes, our product/service supports integration with various tools and platforms such as [Tool 1], [Tool 2], and [Tool 3]. For detailed integration instructions, please refer to our integration guide."
    ];

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
                Still have questions? <a href="#">Contact us</a>
            </div>
        </section>
    );
};

export default FAQ;
