// components/FAQAccordion.tsx

import Image from 'next/image';
import { useState } from 'react';

const faqs = [
    {
        question: 'Accordion-FAQs',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        question: 'Accordion-FAQs',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        question: 'Accordion-FAQs',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        question: 'Accordion-FAQs',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        question: 'Accordion-FAQs',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-16" id='faqs'>
            <Image
                alt="Decoration Image 2"
                width={1440}
                height={400}
                src="/deco2.png"
                className="object-contain self-stretch mt-3.5 w-full"
            />
            <div className="container mx-auto px-4 mt-0 xl:mt-[-200px] lg:mt-[-100px] lg:h-[600px]">
                {/* Section Title */}
                <h2 className='text-center mb-6'>
                    Frequently Asked Questions
                </h2>

                {/* FAQ List */}
                <div className="space-y-2 mb-10">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-300 py-4 cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center mt-5">
                                <h3 className="text-lg font-medium text-primary">
                                    {faq.question}
                                </h3>
                                <div className="w-[40px] h-[40px] rounded-[20px] flex justify-center items-center bg-primary">
                                    <svg
                                        className={`w-6 h-6 text-white transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            {openIndex === index && (
                                <p className="mt-4 text-gray-600">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
