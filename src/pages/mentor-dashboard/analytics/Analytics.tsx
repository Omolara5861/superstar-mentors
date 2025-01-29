"use client"
import Image from "next/image";
import React, { useState } from "react";
import Wrapper from "../../../components/mentor-dashboard/wrapper/Wrapper";
import ReusableCalendar from "../../../components/dashboard/ReusableCalendar";

const Analytics = () => {
    const [date, setDate] = useState<Date>(new Date());

     const [events] = useState([
            { title: "Mentorship session with Omowunmi Dada", time: "9AM - 10AM" },
            { title: "Videography lesson", time: "12PM - 2PM" },
            { title: "Videography lesson", time: "12PM - 2PM" },
            { title: "Videography lesson", time: "12PM - 2PM" },
        ]);
    const mentees = [
        { name: "Ford Wells", email: "ford@gmail.com", lessons: 0, course: "Photography", mentor: "Mentor 1" },
        { name: "Ford Wells", email: "ford@gmail.com", lessons: 0, course: "Photography", mentor: "Mentor 1" },
        { name: "Ford Wells", email: "ford@gmail.com", lessons: 0, course: "Photography", mentor: "Mentor 1" },
        { name: "Ford Wells", email: "ford@gmail.com", lessons: 0, course: "Photography", mentor: "Mentor 1" },
    ];

    const performance = [
        { name: "Philip Paul", score: "20/100", course: "Music(part 1)", attendance: "50%", analysis: 50 },
        { name: "Joy Garba", score: "70/100", course: "Music(part 2)", attendance: "50%", analysis: 50 },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Section: Mentees List */}
            <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <h2 className="text-lg font-bold mb-4">Mentees List</h2>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b text-left text-gray-600">
                            <th className="p-3">NAMES</th>
                            <th className="p-3">LESSONS</th>
                            <th className="p-3">PROGRESS</th>
                            <th className="p-3">COURSES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mentees.map((mentee, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-3 flex items-center">
                                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                                    <div>
                                        <h4 className="font-bold">{mentee.name}</h4>
                                        <p className="text-sm text-gray-500">{mentee.email}</p>
                                    </div>
                                </td>
                                <td className="p-3">{mentee.lessons} Lessons</td>
                                <td className="p-3">
                                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                                        <div className="w-10 h-2 bg-yellow-500 rounded-full"></div>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <span className="px-3 py-1 bg-gray-300 text-gray-800 text-xs rounded-md">
                                        {mentee.course}
                                    </span>
                                    <p className="text-xs text-gray-500">by {mentee.mentor}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Right Section: Calendar */}
                <ReusableCalendar
                    date={date}
                    setDate={setDate}
                    events={events}
                />
            {/* Performance Section */}
            <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <h2 className="text-lg font-bold mb-4">Mentees Performance Details</h2>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-md font-semibold">Progress</h3>
                    <button
                        className=" bg-[#fff] bg-transparent border border-primary py-2 px-3 w-[190px] h-[57px] flex items-center justify-between rounded"
                    >
                        Filter <Image
                            src="/dashboard/filter.svg"
                            alt="Sort Icon"
                            width={16}
                            height={16}
                            className="self-center"
                        />
                    </button>
                </div>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b text-left text-gray-600">
                            <th className="p-3">Names</th>
                            <th className="p-3">Scores</th>
                            <th className="p-3">Course</th>
                            <th className="p-3">Attendance</th>
                            <th className="p-3">Analysis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {performance.map((mentee, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-3">{mentee.name}</td>
                                <td className="p-3">{mentee.score}</td>
                                <td className="p-3">{mentee.course}</td>
                                <td className="p-3 text-green-600">{mentee.attendance}</td>
                                <td className="p-3">
                                    <div className="relative w-10 h-10 flex items-center justify-center">
                                        <svg className="w-full h-full" viewBox="0 0 36 36">
                                            <circle
                                                className="text-gray-200 stroke-current"
                                                strokeWidth="3"
                                                fill="transparent"
                                                r="16"
                                                cx="18"
                                                cy="18"
                                            ></circle>
                                            <circle
                                                className="text-green-500 stroke-current"
                                                strokeWidth="3"
                                                fill="transparent"
                                                r="16"
                                                cx="18"
                                                cy="18"
                                                strokeDasharray={`${mentee.analysis}, 100`}
                                            ></circle>
                                        </svg>
                                        <span className="absolute text-xs font-bold">{mentee.analysis}%</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wrapper(Analytics);
