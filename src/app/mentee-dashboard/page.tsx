"use client";
import { useState } from "react";
import Wrapper from "../../components/mentee-dashboard/wrapper/Wrapper";
import Calendar from "react-calendar";
import Image from "next/image";

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
    ]);
    const [date, setDate] = useState<Date | null>(new Date());
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
                                <Image src="/dashboard/enroll-course.svg" width={40} height={40} alt="Course" />
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
                                className="flex flex-wrap items-center bg-white p-4 rounded-lg shadow-sm mb-4"
                            >
                                <div className="flex-grow">
                                    <p className="font-semibold">
                                        Upcoming mentorship session with{" "}
                                        {session.mentor}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <span className="inline-block">
                                            <svg
                                                className="h-5 w-5 inline-block mr-1"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                {/* Add Calendar Icon */}
                                            </svg>
                                            {session.date}
                                        </span>
                                        <span className="ml-4">
                                            <svg
                                                className="h-5 w-5 inline-block mr-1"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                {/* Add Clock Icon */}
                                            </svg>
                                            {session.time}
                                        </span>
                                    </p>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="bg-green-700 text-white px-4 py-2 rounded-md">
                                        Join session
                                    </button>
                                    <button className="border border-green-700 text-green-700 px-4 py-2 rounded-md hover:bg-green-100">
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
                        <h3 className="text-sm font-semibold">Profile Strength</h3>
                        <div className="mt-2">
                            <div className="bg-gray-200 rounded-full h-2 w-full">
                                <div
                                    className="bg-yellow-400 h-2 rounded-full"
                                    style={{ width: "30%" }}
                                ></div>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">Poor</p>
                        </div>
                    </div>

                    {/* Calendar Section */}
                    <div className="p-6 bg-white rounded-lg shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-sm font-semibold">September 2021</h3>
                            <div className="flex space-x-2">
                                <button className="text-gray-600 hover:text-green-700">
                                    &lt;
                                </button>
                                <button className="text-gray-600 hover:text-green-700">
                                    &gt;
                                </button>
                            </div>
                        </div>

                        {/* React Calendar */}
                        <Calendar
                            onChange={(value) => setDate(value as Date)}
                            value={date}
                            className="border-none text-center rounded-lg"
                            tileClassName={({ date, view }) =>
                                view === "month" && date.toDateString() === new Date().toDateString()
                                    ? "bg-yellow-200 rounded-full text-black"
                                    : ""
                            }
                            nextLabel=">>" // Custom right arrow
                    prevLabel="<<" // Custom left arrow

                        />

                        {/* Event Cards */}
                        <div className="mt-6 space-y-4">
                            {events.map((event, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center p-4 bg-gradient-to-r from-green-500 to-yellow-500 text-white rounded-lg shadow-sm"
                                >
                                    <div>
                                        <p className="font-medium">{event.title}</p>
                                        <p className="text-sm">{event.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                </div>
            </div>
    );
}

export default Wrapper(Dashboard);
