import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
    {
        text: '“Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur. . Pulvinar at egestas lacus interdum velit molestie. tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur. . Pulvinar at egestas lacus interdum velit molestie”.',
        author: 'Deborah Joshua',
        image: '/testimonials/testimonial1.png',
        thumb1: '/testimonials/thumb1.png',
        thumb2: '/testimonials/thumb2.png',
        thumb3: '/testimonials/thumb3.png',
        thumb4: '/testimonials/thumb4.png',
        thumb5: '/testimonials/thumb5.png',
        thumb6: '/testimonials/thumb6.png',
    },
    {
        text: '“Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur. . Pulvinar at egestas lacus interdum velit molestie. tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur. . Pulvinar at egestas lacus interdum velit molestie”..',
        author: 'Ruth Anda',
        image: '/testimonials/testimonial2.png',
        thumb1: '/testimonials/thumb7.png',
        thumb2: '/testimonials/thumb1.png',
        thumb3: '/testimonials/thumb2.png',
        thumb4: '/testimonials/thumb5.png',
        thumb5: '/testimonials/thumb6.png',
        thumb6: '/testimonials/thumb3.png',
    },
    {
        text: '“Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur. . Pulvinar at egestas lacus interdum velit molestie. tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur. . Pulvinar at egestas lacus interdum velit molestie”.',
        author: 'Joshua Anthony',
        image: '/testimonials/testimonial3.png',
        thumb1: '/testimonials/thumb4.png',
        thumb2: '/testimonials/thumb7.png',
        thumb3: '/testimonials/thumb1.png',
        thumb4: '/testimonials/thumb6.png',
        thumb5: '/testimonials/thumb3.png',
        thumb6: '/testimonials/thumb2.png',
    },
    {
        text: '“Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur. . Pulvinar at egestas lacus interdum velit molestie. tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur. . Pulvinar at egestas lacus interdum velit molestie”.',
        author: 'Rebecca Silas',
        image: '/testimonials/testimonial4.png',
        thumb1: '/testimonials/thumb5.png',
        thumb2: '/testimonials/thumb4.png',
        thumb3: '/testimonials/thumb7.png',
        thumb4: '/testimonials/thumb3.png',
        thumb5: '/testimonials/thumb2.png',
        thumb6: '/testimonials/thumb1.png',
    },
    {
        text: '“Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur. . Pulvinar at egestas lacus interdum velit molestie. tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur. . Pulvinar at egestas lacus interdum velit molestie”.',
        author: 'Musa Yusuf',
        image: '/testimonials/testimonial5.png',
        thumb1: '/testimonials/thumb6.png',
        thumb2: '/testimonials/thumb5.png',
        thumb3: '/testimonials/thumb4.png',
        thumb4: '/testimonials/thumb2.png',
        thumb5: '/testimonials/thumb1.png',
        thumb6: '/testimonials/thumb7.png',
    },
    {
        text: '“Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur. . Pulvinar at egestas lacus interdum velit molestie. tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur. . Pulvinar at egestas lacus interdum velit molestie”.',
        author: 'RashFord Godson',
        image: '/testimonials/testimonial6.png',
        thumb1: '/testimonials/thumb3.png',
        thumb2: '/testimonials/thumb6.png',
        thumb3: '/testimonials/thumb5.png',
        thumb4: '/testimonials/thumb1.png',
        thumb5: '/testimonials/thumb7.png',
        thumb6: '/testimonials/thumb4.png',
    },
    {
        text: '“Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur. . Pulvinar at egestas lacus interdum velit molestie. tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur. . Pulvinar at egestas lacus interdum velit molestie”.',
        author: 'RashFord Godson',
        image: '/testimonials/person7.png',
        thumb1: '/testimonials/thumb2.png',
        thumb2: '/testimonials/thumb3.png',
        thumb3: '/testimonials/thumb6.png',
        thumb4: '/testimonials/thumb7.png',
        thumb5: '/testimonials/thumb4.png',
        thumb6: '/testimonials/thumb5.png',
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
        <section className="bg-background my-12 pt-[53px] pb-[171px]">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h2 className=" text-center mb-12">
                    Why rely solely on our words?
                </h2>

                {/* Carousel Content */}
                <div className="relative flex items-center justify-center">
                    {/* Circular Images */}
                    <div className="hidden lg:block">
                        <div className="absolute left-16 -top-5 rounded-full overflow-hidden border-4 border-green-50 shadow-md">
                            <Image
                                src={testimonials[currentIndex].thumb1}
                                alt="Person 1"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -left-10 top-40 rounded-full overflow-hidden border-4 border-green-50 shadow-md">
                            <Image
                                src={testimonials[currentIndex].thumb2}
                                alt="Person 2"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute left-10 -bottom-20 rounded-full overflow-hidden border-4 border-green-50 shadow-md">
                            <Image
                                src={testimonials[currentIndex].thumb3}
                                alt="Person 3"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute right-16 -top-5 rounded-full overflow-hidden border-4 border-green-50 shadow-md">
                            <Image
                                src={testimonials[currentIndex].thumb4}
                                alt="Person 4"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -right-10 top-40 rounded-full overflow-hidden border-4 border-green-50 shadow-md">
                            <Image
                                src={testimonials[currentIndex].thumb5}
                                alt="Person 5"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute right-10 -bottom-20 rounded-full overflow-hidden border-4 border-green-50 shadow-md">
                            <Image
                                src={testimonials[currentIndex].thumb6}
                                alt="Person 6"
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                        </div>
               </div>
                    {/* Testimonial Box */}
                    <div className="bg-white w-full lg:w-3/5 px-[61px] pt-[109px] pb-5 rounded-2xl testimonial-shadow mx-auto text-center relative mt-12">
                        {/* Central Profile Image */}
                            <Image
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].author}
                                width={112}
                                height={112}
                            className="w-36 h-36 rounded-full object-cover absolute left-1/2  -translate-x-1/2 top-[-50px]"
                            />
                        <p className="text-[#01100A80] italic mb-4">
                            {testimonials[currentIndex].text}
                        </p>
                        <h4 className="text-lg font-semibold text-text">
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
