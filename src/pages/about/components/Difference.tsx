import Image from 'next/image';
import Link from 'next/link';

const DifferenceSection = () => {
    return (
        <section className="bg-white pt-[100px] pb-12 container m-auto">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full shake">
                   <Image src='/about/shake.png' alt='Hand Shake' width={613} height={600} className='shake' />
                </div>
                <div className="flex flex-col lg:-ml-44 -mt-44 w-6/12 lg:mt-0 max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden flex-col grow justify-center px-20 py-10 mt-24 w-full rounded-none bg-tertiary max-md:px-5 max-md:mt-10 max-md:max-w-full shake">
                        <div className="flex flex-col w-full max-md:max-w-full">
                            <div className="flex flex-col w-full max-md:max-w-full">
                                <h2 className='text-white'>
                                    Join Us in Making a Difference
                                </h2>
                                <p className="mt-2 lg:text-xl font-medium leading-7 text-[#FFFFFFCC] max-md:max-w-full">
                                    . Tellus cursus natoque aenean tortor. Non ac blandit elit
                                    pulvinar vulputate lorem ac sed. Pulvinar at egestas lacus
                                    interdum velit molestie. . Tellus cursus natoque aenean
                                    tortor. Non ac blandit elit pulvinar vulputate lorem ac sed.
                                    Pulvinar at egestas lacus interdum velit molestie. . Tellus
                                    cursus natoque aenean tortor. Non ac blandit elit pulvinar
                                    vulputate lorem ac sed. Pulvinar at
                                </p>
                            </div>
                            <Link href=''>
                                <button className="bg-background mt-10 text-primary inline-block hover:bg-primary hover:text-background font-medium lg:w-[168px] w-auto py-3 px-4 rounded-lg">
                                    Find a Mentor
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DifferenceSection;