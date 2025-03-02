"use client";
import { useState } from "react";
import Wrapper from "../../components/mentee-dashboard/wrapper/Wrapper";
import Image from "next/image";
import ReusableCalendar from '../../components/dashboard/ReusableCalendar';

function Dashboard() {
    const [upcomingSessions, setUpcomingSessions] = useState([
        {
            mentor: "Omowunmi Dada",
            date: "22/08/2024",
            time: "10:00am",
        },
        {
            mentor: "Omowunmi Dada",
            date: "22/08/2024",
            time: "10:00am",
        },
        {
            mentor: "Omowunmi Dada",
            date: "22/08/2024",
            time: "10:00am",
        }
    ]);
    const [date, setDate] = useState<Date>(new Date());
    const [events] = useState([
        { title: "Mentorship session with Omowunmi Dada", time: "9AM - 10AM" },
        { title: "Videography lesson", time: "12PM - 2PM" },
        { title: "Videography lesson", time: "12PM - 2PM" },
        { title: "Videography lesson", time: "12PM - 2PM" },
    ]);

    return (
        <div className="p-2 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Section */}
                <div className="md:col-span-2 space-y-2">
                    {/* User Information */}
                    <div className="p-6 bg-tertiary rounded-lg shadow-sm flex justify-between items-center mb-5">
                        <div className="!text-[#F5F5F5]">
                            <p className="font-medium">Loveth James! 👋</p>
                            <p className="text-sm">
                                You have 4 upcoming sessions
                            </p>
                        </div>
                        <Image src="/dashboard/amico.svg" width={80} height={80} alt="Rolls" />
                    </div>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Enrolled Courses */}
                        <div className="bg-white p-[14px] rounded-lg shadow-md border border-[#F5F5F5] text-center">
                            <div className="flex gap-3 pb-2">
                                <Image src="/dashboard/enroll course.svg" width={40} height={40} alt="Course" />
                                <div>
                                    <h4 className="text-2xl font-bold text-left">0</h4>
                                    <p className="text-xl text-left text-subtext">Enrolled Course</p>
                                </div>
                            </div>
                            <button className="text-subtext font-medium mt-2 flex justify-between border-t-[0.5px] border-t-subtext pt-5 w-full">
                                View details
                                <Image src="/dashboard/arrow-right.svg" width={28} height={24} alt="Course" />
                            </button>
                        </div>

                        {/* Certificates */}
                        <div className="bg-white p-[14px] rounded-lg shadow-md border border-[#F5F5F5] text-center">
                            <div className="flex gap-3 pb-2">
                                <Image src="/dashboard/certificate.svg" width={40} height={40} alt="Course" />
                                <div>
                                    <h4 className="text-2xl font-bold text-left">0</h4>
                                    <p className="text-xl text-left text-subtext">Certificates</p>
                                </div>
                            </div>
                            <button className="text-subtext font-medium mt-2 flex justify-between border-t-[0.5px] border-t-subtext pt-5 w-full">
                                View details
                                <Image src="/dashboard/arrow-right.svg" width={28} height={24} alt="Course" />
                            </button>
                        </div>

                        {/* More Certificates */}
                        <div className="bg-white p-[14px] rounded-lg shadow-md border border-[#F5F5F5] text-center">
                            <div className="flex gap-3 pb-2">
                                <Image src="/dashboard/certificates.svg" width={40} height={40} alt="Course" />
                                <div>
                                    <h4 className="text-2xl font-bold text-left">0</h4>
                                    <p className="text-xl text-left text-subtext">Certificates</p>
                                </div>
                            </div>
                            <button className="text-subtext font-medium mt-2 flex justify-between border-t-[0.5px] border-t-subtext pt-5 w-full">
                                View details
                                <Image src="/dashboard/arrow-right.svg" width={28} height={24} alt="Course" />
                            </button>
                        </div>
                    </div>

                    {/* Recent Sessions */}
                    <div>
                        <h3 className="text-xl font-medium mt-6 mb-4 text-subtext">Recent Sessions</h3>
                        {upcomingSessions.map((session, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row justify-between bg-[#FFFEFE] p-5 rounded-lg shadow-md mb-4 ${index === 0 ? 'border-[0.5px] border-primary' : ''
                                    }`}
                            >
                                <div className="flex flex-col md:flex-row gap-3 md:w-2/5">
                                    <Image src="/dashboard/ellipse.svg" width={50} height={50} alt="Profile" className="h-fit" />
                                    <div>
                                        <p className="text-subtext mb-0">
                                            Upcoming mentorship session with{" "}
                                        </p>
                                        <p className="text-text text-sm mb-2">{session.mentor}</p>
                                        <div className="flex gap-4 text-sm text-gray-600">
                                            <div className="flex gap-2">
                                                <Image src="/dashboard/calendar.svg" width={24} height={24} alt="Calendar" />
                                                <span>{session.date}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <Image src="/dashboard/clock.svg" width={24} height={24} alt="Clock" />
                                                <span>{session.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full md:w-2/5 self-center mt-4 md:mt-0">
                                    <button className="bg-primary text-white h-[54px] rounded-md w-full md:w-1/2">
                                        Join session
                                    </button>
                                    <button className="border border-primary text-primary h-[54px] rounded-md hover:bg-green-100 w-full md:w-1/2">
                                        Message
                                    </button>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>
                {/* Right Section (Calendar & Profile Strength) */}
                <div className="space-y-6">
                    {/* Profile Strength */}
                    <div className="p-6 bg-white rounded-lg shadow-sm">
                        <div className="flex justify-between mb-4">
                            <h3 className="text-lg font-medium text-subtext">Profile Strength</h3>
                            <button className="text-sm text-subtext border w-[79px] p-1 rounded-2xl h-fit border-primary">Poor</button>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2 w-full">
                            <div
                                className="bg-yellow-400 h-2 rounded-full"
                                style={{ width: "30%" }}
                            ></div>
                        </div>
                    </div>

                    {/* Calendar Section */}
                        <ReusableCalendar
                            date={date}
                            setDate={setDate}
                            events={events}
                        />
                </div>
            </div>
        </div>
    );
}

export default Wrapper(Dashboard);
