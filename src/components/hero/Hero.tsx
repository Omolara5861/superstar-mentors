import Image from "next/image";
import Button from "../button/Button";
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
                    <div className="flex justify-center lg:justify-start space-x-4">
                        <Button href='/join' width='168px' btnText=' Join as a Mentee' />
                        <Link href='/mentor'>
                            <button className="inline-block bg-transparent lg:w-[168px] w-auto py-3 px-4 rounded-lg text-primary border-2 border-primary">
                                Mentor
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                    <div className="relative rounded-lg overflow-hidden">
                        <Image
                            src="/carousel/producer.png"
                            alt="Mentorship Image 1"
                            width={250}
                            height={250}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="relative rounded-lg overflow-hidden">
                        <Image
                            src="/carousel/actress.png"
                            alt="Mentorship Image 2"
                            width={250}
                            height={250}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="relative rounded-lg overflow-hidden">
                        <Image
                            src="/carousel/choreo.png"
                            alt="Mentorship Image 3"
                            width={250}
                            height={250}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="relative rounded-lg overflow-hidden">
                        <Image
                            src="/carousel/comedy.png"
                            alt="Mentorship Image 4"
                            width={250}
                            height={250}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="relative rounded-lg overflow-hidden">
                        <Image
                            src="/carousel/production.png"
                            alt="Mentorship Image 5"
                            width={250}
                            height={250}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="relative rounded-lg overflow-hidden">
                        <Image
                            src="/carousel/cinema.png"
                            alt="Mentorship Image 6"
                            width={250}
                            height={250}
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
