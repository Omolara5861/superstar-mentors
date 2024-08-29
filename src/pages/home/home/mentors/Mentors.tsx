// components/MentorGrid.tsx
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../../../components/button/Button';

const MentorGrid = () => {
    // Example mentor data
    const mentors = [
        { name: 'Joyce Davids', title: 'Film Director with Nollywood', image: '/mentors/mentor1.png' },
        { name: 'Joyce Davids', title: 'Film Director with Nollywood', image: '/mentors/mentor2.png' },
        { name: 'Joyce Davids', title: 'Film Director with Nollywood', image: '/mentors/mentor3.png' },
        { name: 'Joyce Davids', title: 'Film Director with Nollywood', image: '/mentors/mentor4.png' },
        { name: 'Joyce Davids', title: 'Film Director with Nollywood', image: '/mentors/mentor5.png' },
        { name: 'Joyce Davids', title: 'Film Director with Nollywood', image: '/mentors/mentor6.png' },
        { name: 'Joyce Davids', title: 'Film Director with Nollywood', image: '/mentors/mentor7.png' },
        { name: 'Joyce Davids', title: 'Film Director with Nollywood', image: '/mentors/mentor8.png' },
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-center mb-[51px]">
                    Explore Over 20+ Mentors
                </h2>

                {/* Mentor Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mentors.map((mentor, index) => (
                        <div key={index} className="bg-white shadow-md rounded-[25px] overflow-hidden mentee">
                            {/* Mentor Image */}
                            <div className="relative w-full">
                                <Image
                                    src={mentor.image}
                                    alt={mentor.name}
                                    objectFit="cover"
                                    width={295}
                                    height={180}
                                    className='w-full'
                                />
                            </div>
                            {/* Mentor Info */}
                            <div className="py-[31px] text-center text-[#01100AB2] font-medium">
                                <p >{mentor.name}</p>
                                <p className="text-sm">{mentor.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Explore All Mentors Button */}
                <div className="flex justify-center mt-12">
                    <Button href='mentors' width='229px' btnText='Explore all Mentors' />
                </div>
            </div>
        </section>
    );
};

export default MentorGrid;
