import Image from 'next/image';

const HeroSection = () => {
    return (
        <>
        <section className="relative bg-custom-gradient text-white py-20">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/about/about-bg.jpg" // Make sure to replace with your actual image path
                    alt="Background image"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-50"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Us</h1>
                <p className="text-lg md:text-xl">Your Reliable Hub For Mentorship</p>
            </div>
        </section>
            <Image
                alt="Decoration Image 2"
                width={1440}
                height={147}
                src="/about/about-deco.png"
                className="object-contain w-full"
            />
        </>
    );
};

export default HeroSection;
