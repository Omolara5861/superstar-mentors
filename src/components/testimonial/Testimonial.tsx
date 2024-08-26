// components/TestimonialCarousel.tsx

import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
    {
        text: '“Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie...”',
        author: 'Deborah Joshua',
        image: '/testimonials/testimonial1.png',
    },
    {
        text: '“Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie...”.',
        author: 'Ruth Anda',
        image: '/testimonials/testimonial2.png',
    },
    {
        text: '“Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie...”',
        author: 'Joshua Anthony',
        image: '/testimonials/testimonial3.png',
    },
    {
        text: '“Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie...”',
        author: 'Rebecca Silas',
        image: '/testimonials/testimonial4.png',
    },
    {
        text: '“Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie...”',
        author: 'Musa Yusuf',
        image: '/testimonials/testimonial5.png',
    },
    {
        text: '“Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie...”',
        author: 'RashFord Godson',
        image: '/testimonials/testimonial6.png',
    },
    // Add more testimonials as needed
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="bg-green-50 py-16 relative">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    Why rely solely on our words?
                </h2>

                {/* Carousel Content */}
                <div className="relative flex items-center justify-center">
                    {/* Circular Images */}
                    <div className="absolute -left-16 -top-10 w-20 h-20 rounded-full overflow-hidden border-4 border-green-50 shadow-md">
                        <Image
                            src="/images/person1.jpg"
                            alt="Person 1"
                            width={80}
                            height={80}
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute -left-20 top-40 w-20 h-20 rounded-full overflow-hidden border-4 border-green-50 shadow-md">
                        <Image
                            src="/images/person2.jpg"
                            alt="Person 2"
                            width={80}
                            height={80}
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute -right-16 -top-10 w-20 h-20 rounded-full overflow-hidden border-4 border-green-50 shadow-md">
                        <Image
                            src="/images/person3.jpg"
                            alt="Person 3"
                            width={80}
                            height={80}
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute -right-20 top-40 w-20 h-20 rounded-full overflow-hidden border-4 border-green-50 shadow-md">
                        <Image
                            src="/images/person4.jpg"
                            alt="Person 4"
                            width={80}
                            height={80}
                            className="object-cover"
                        />
                    </div>

                    {/* Central Profile Image */}
                    <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-lg z-10">
                        <Image
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].author}
                            width={112}
                            height={112}
                            className="object-cover"
                        />
                    </div>

                    {/* Testimonial Box */}
                    <div className="bg-white p-8 rounded-lg shadow-md mx-auto max-w-xl text-center mt-16 relative z-0">
                        <p className="text-gray-700 italic mb-4">
                            {testimonials[currentIndex].text}
                        </p>
                        <h4 className="text-lg font-semibold text-gray-900">
                            {testimonials[currentIndex].author}
                        </h4>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center space-x-8 mt-8">
                    <button onClick={handlePrev}>
                        <Image src='/arr-left.svg' alt='Arrow Left' width={54} height={32} />
                    </button>
                    <button onClick={handleNext}>
                        <Image src='/arr-right.svg' alt='Arrow Right' width={54} height={32} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
