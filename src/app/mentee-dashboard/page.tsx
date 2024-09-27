"use client";
import { useState } from "react";
import Wrapper from "../../components/mentee-dashboard/wrapper/Wrapper";
import Calendar from "react-calendar";

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
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Section */}
                <div className="md:col-span-2 space-y-6">
                    {/* User Information */}
                    <div className="p-6 bg-white rounded-lg shadow-sm flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold">Loveth James! 👋</h3>
                            <p className="text-sm text-gray-600">
                                You have 4 upcoming sessions
                            </p>
                        </div>
                        <button className="bg-transparent border border-green-700 text-green-700 px-4 py-2 rounded-md hover:bg-green-100">
                            View profile
                        </button>
                    </div>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Enrolled Courses */}
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="bg-green-700 text-white p-3 w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">
                                {/* Add Icon */}
                            </div>
                            <h4 className="text-lg font-semibold">0 Enrolled Course</h4>
                            <button className="text-green-700 font-medium mt-2">
                                View details ➔
                            </button>
                        </div>

                        {/* Certificates */}
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="bg-yellow-400 text-white p-3 w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">
                                {/* Add Icon */}
                            </div>
                            <h4 className="text-lg font-semibold">0 Certificates</h4>
                            <button className="text-green-700 font-medium mt-2">
                                View details ➔
                            </button>
                        </div>

                        {/* More Certificates */}
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="bg-purple-500 text-white p-3 w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">
                                {/* Add Icon */}
                            </div>
                            <h4 className="text-lg font-semibold">0 Certificates</h4>
                            <button className="text-green-700 font-medium mt-2">
                                View details ➔
                            </button>
                        </div>
                    </div>

                    {/* Recent Sessions */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Recent Sessions</h3>
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
