import Image from 'next/image';
import Button from '../../button/Button';

const MentorshipDetails = () => {
    return (
        <section className="bg-white py-[100px]">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-12 lg:space-y-0 lg:gap-x-28">
                {/* Mentor Card */}
                <div className="mentor-parent">
                    <div className="mentor-child  bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                        {/* Mentor Image */}
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                            <Image
                                src="/olayiwola.png"
                                alt="Olayiwola Rasaq"
                                width={96}  // Adjusted width to match container size
                                height={96} // Adjusted height to match container size
                                className="object-cover"
                            />
                        </div>
                        {/* Mentor Info */}
                        <h3 className="text-xl font-bold text-[#3D3D3D]">Olayiwola Rasaq</h3>
                        <p className="text-md text-[#7D7D7D] mb-4">Movie Director</p>
                        {/* Services and Pricing */}
                        <div className="w-full space-y-3 text-[#505050]">
                            <div className="flex justify-between items-center bg-[#FAFAFA] p-3 rounded-lg">
                                <span>Mentorship</span>
                                <span className="text-[#028053] font-bold">$300/month</span>
                            </div>
                            <div className="flex justify-between items-center bg-[#FAFAFA] p-3 rounded-lg">
                                <span>Cv/Portfolio Review</span>
                            </div>
                            <div className="flex justify-between items-center bg-[#FAFAFA] p-3 rounded-lg">
                                <span>1-on-1 Session</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="lg:w-2/3 w-full">
                    <h2>
                        Unlock Your Potential with a Dedicated Mentor
                    </h2>
                    <p className="text-text mb-8">
                        Are you eager to launch a new dream career, build a thriving startup, or master
                        high-demand skills? With <span className='text-primary font-bold'>Mentor</span>, an online mentor is just a click away, ready to
                        provide expert advice and guidance tailored to your passion.
                    </p>
                    {/* Benefits List */}
                    <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                            <span className="bg-[#F1FFFB] text-[#06402B] rounded-full w-8 h-8 flex items-center justify-center font-bold">1</span>
                            <p className="text-subtext">
                                <span className="font-medium text-text">Flexible Program Structures:</span> Tailored to fit your unique needs and schedule.
                            </p>
                        </li>
                        <li className="flex items-start space-x-3">
                            <span className="bg-[#F1FFFB] text-[#06402B] rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span>
                            <p className="text-subtext">
                                <span className="font-medium text-text">Interactive Learning:</span> Benefit from dynamic and engaging mentorship.
                            </p>
                        </li>
                        <li className="flex items-start space-x-3">
                            <span className="bg-[#F1FFFB] text-[#06402B] rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span>
                            <p className="text-subtext">
                                <span className="font-medium text-text">Take Home Assignments:</span> Tailored to fit your unique needs and schedule.
                            </p>
                        </li>
                        <li className="flex items-start space-x-3">
                            <span className="bg-[#F1FFFB] text-[#06402B] rounded-full w-8 h-8 flex items-center justify-center font-bold">4</span>
                            <p className="text-subtext">
                                <span className="font-medium text-text">1-on-1 Sessions:</span> Tailored to fit your unique needs and schedule.
                            </p>
                        </li>
                        <li className="flex items-start space-x-3">
                            <span className="bg-[#F1FFFB] text-[#06402B] rounded-full w-8 h-8 flex items-center justify-center font-bold">5</span>
                            <p className="text-subtext">
                                <span className="font-medium text-text">True Life Stories and Experience:</span> Tailored to fit your unique needs and schedule.
                            </p>
                        </li>
                    </ul>
                    {/* Call to Action Button */}
                    <div className="mt-8">
                        <Button href='' width='168px' btnText='Join as a Mentee' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentorshipDetails;
