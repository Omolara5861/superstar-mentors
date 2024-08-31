import Image from 'next/image';
import { useRef, useState } from 'react';

const teamMembers = [
    {
        name: 'Name Last name',
        position: 'Position @ Company',
        image: '/about/member1.png',
        text: 'Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie.',
    },
    {
        name: 'Name Last name',
        position: 'Position @ Company',
        image: '/about/member2.png',
        text: 'Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie.',
    },
    {
        name: 'Name Last name',
        position: 'Position @ Company',
        image: '/about/member3.png',
        text: 'Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie.',
    },
    {
        name: 'Name Last name',
        position: 'Position @ Company',
        image: '/about/member1.png',
        text: 'Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie.',
    },
];

const TeamSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
        );
        scrollToCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
        );
        scrollToCurrentIndex(currentIndex + 1);
    };

    const scrollToCurrentIndex = (index: number) => {
        if (carouselRef.current) {
            const containerWidth = carouselRef.current.clientWidth;
            const cardWidth = carouselRef.current.scrollWidth / teamMembers.length;
            const scrollPosition = index * cardWidth - containerWidth / 2 + cardWidth / 2;
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <Image
                alt="Decoration Image 2"
                width={1440}
                height={147}
                src="/about/about-deco2.png"
                className="object-contain w-full"
            />
            <section className="bg-background py-16">
                <div className="container mx-auto px-4">
                    {/* Section Title */}
                    <h2 className="text-center">Meet the Team</h2>
                    <p className="mt-12 mb-10 text-center">
                        We are a team of dedicated professionals committed to making a meaningful impact on individuals and communities.
                    </p>

                    {/* Carousel Container */}
                    <div
                        ref={carouselRef}
                        className="overflow-x-auto flex snap-x snap-mandatory scroll-smooth mb-8 scrollbar-none"
                    >
                        {teamMembers.map((teamMember, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 mt-12 w-80 max-w-sm p-6 mx-4 bg-white border border-[#E1E0E0] rounded-lg shadow-team transition-transform duration-500 ease-in-out snap-center ${index === currentIndex ? 'scale-100' : 'scale-90 opacity-50'
                                    }`}
                            >
                                {/* Profile Image */}
                                <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                                    <Image
                                        src={teamMember.image}
                                        alt={teamMember.name}
                                        width={80}
                                        height={80}
                                        className="object-cover"
                                    />
                                </div>
                                {/* Name and Position */}
                                <div className="text-center mb-4 mt-8">
                                    <h3 className="text-xl font-bold text-gray-800">{teamMember.name}</h3>
                                    <p className="text-sm text-gray-500">{teamMember.position}</p>
                                </div>
                                {/* Team Member Text */}
                                <p className="text-gray-600 text-center leading-relaxed">{teamMember.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex justify-center space-x-8 mt-6">
                        <button onClick={handlePrev} className="pointer">
                            <Image src="/arr-left.svg" alt="Arrow Left" width={32} height={32} />
                        </button>
                        <button onClick={handleNext} className="pointer">
                            <Image src="/arr-right.svg" alt="Arrow Right" width={32} height={32} />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamSection;

