import Image from "next/image";
import Button from "../../../../components/button/Button";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="bg-[#F1FFFB] pt-16">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
                {/* Text Area */}
                <div className="lg:w-1/2 w-full mb-8 lg:mb-0 lg:pr-12 text-center lg:text-left text-text">
                    <h1 className=" mb-4">
                        Bridging the Gap in Nollywood Mentorship
                    </h1>
                    <p className="mb-6">
                        By mastering a new skill, kickstart a project, secure your ideal career.
                    </p>
                    <div className="flex flex-col justify-center lg:flex-row lg:justify-start lg:space-x-4">
                        <Button href='/join' width='168px' btnText=' Join as a Mentee' />
                        <Link href='/mentor'>
                            <button className="lg:mt-0 mt-3 inline-block bg-transparent hover:bg-secondary hover:border-none font-medium w-[168px] py-3 px-4 rounded-lg text-primary border-2 border-primary">
                                Mentor
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                    <div className="relative rounded-xl overflow-hidden">
                        <Image
                            src="/carousel/producer.jpg"
                            alt="Mentorship Image 1"
                            width={250}
                            height={250}
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                        <Image
                            src="/carousel/actress.jpg"
                            alt="Mentorship Image 2"
                            width={250}
                            height={250}
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                        <Image
                            src="/carousel/choreo.jpg"
                            alt="Mentorship Image 3"
                            width={250}
                            height={250}
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                        <Image
                            src="/carousel/comedy.jpg"
                            alt="Mentorship Image 4"
                            width={250}
                            height={250}
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                        <Image
                            src="/carousel/production.jpg"
                            alt="Mentorship Image 5"
                            width={250}
                            height={250}
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                        <Image
                            src="/carousel/cinema.jpg"
                            alt="Mentorship Image 6"
                            width={250}
                            height={250}
                            className="object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
