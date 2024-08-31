import Image from 'next/image';

const MissionSection = () => {
    return (
        <section className="bg-background py-16">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-center mb-24">About Us</h2>

                {/* Mission Section */}
                <div className="flex flex-col md:flex-row items-center mb-20">
                    {/* Text Content */}
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                        <h3 className="mb-6 font-medium">Our Mission</h3>
                        <p className="text-subtext leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar
                            vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur.
                            Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas
                            lacus interdum velit molestie.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2">
                        <Image
                            src="/about/mission.png"
                            alt="Our Mission"
                            width={650}
                            height={420}
                            className="rounded-3xl object-cover"
                        />
                    </div>
                </div>

                {/* Vision Section */}
                <div className="flex flex-col md:flex-row items-center">
                    {/* Image */}
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                        <Image
                            src="/about/vision.png"
                            alt="Our Vision"
                            width={650}
                            height={420}
                            className="rounded-3xl object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="md:w-1/2">
                        <h3 className="mb-6 font-medium">Our Vision</h3>
                        <p className="text-subtext leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar
                            vulputate lorem ac sed. Pulvinar at egestas lacus interdum velit molestie. Lorem ipsum dolor sit amet consectetur.
                            Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. Pulvinar at egestas
                            lacus interdum velit molestie.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
