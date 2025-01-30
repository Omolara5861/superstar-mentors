"use client"
import Image from "next/image";
import React, { useState } from "react";
import Wrapper from "../../../components/mentor-dashboard/wrapper/Wrapper";
import ReusableCalendar from "../../../components/dashboard/ReusableCalendar";

const Analytics = () => {
    const [date, setDate] = useState<Date>(new Date());

     const [events] = useState([
            { title: "Videography lesson", time: "12PM - 2PM" },
            { title: "Videography lesson", time: "12PM - 2PM" },
            { title: "Videography lesson", time: "12PM - 2PM" },
            { title: "Videography lesson", time: "12PM - 2PM" },
            { title: "Videography lesson", time: "12PM - 2PM" },
            { title: "Videography lesson", time: "12PM - 2PM" },
         { title: "Videography lesson", time: "12PM - 2PM" }
     ]);
    const mentees = [
        { name: "Ford Wells", email: "ford@gmail.com", lessons: 0, course: "Photography", mentor: "Mentor 1" },
        { name: "Ford Wells", email: "ford@gmail.com", lessons: 0, course: "Photography", mentor: "Mentor 1" },
        { name: "Ford Wells", email: "ford@gmail.com", lessons: 0, course: "Photography", mentor: "Mentor 1" },
        { name: "Ford Wells", email: "ford@gmail.com", lessons: 0, course: "Photography", mentor: "Mentor 1" }
    ];

    const performance = [
        { name: "Philip Paul", score: "20/100", course: "Music(part 1)", attendance: "50%", analysis: 50 },
        { name: "Joy Garba", score: "70/100", course: "Music(part 2)", attendance: "50%", analysis: 50 }
    ];

    return (
        <div className="mt-5 flex gap-6">
            <div className="w-9/12">
            {/* Left Section: Mentees List */}
            <div className="bg-white p-5 rounded-lg md:col-span-2 mb-6">
                <table className="w-full border-collapse text-subtext">
                    <thead>
                        <tr className="border-b text-left text-xl">
                            <th className="p-5">NAMES</th>
                            <th className="p-5">LESSONS</th>
                            <th className="p-5">PROGRESS</th>
                            <th className="p-5">COURSES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mentees.map((mentee, index) => (
                            <tr key={index} className="border-b font-medium shadow-[0px_1px_1px_0px_#0000001F]">
                                <td className="p-5 flex items-center">
                                    <div className="w-[30px] h-[30px] bg-subtext rounded-full mr-3"></div>
                                    <div>
                                        <h4 className="text-text">{mentee.name}</h4>
                                        <p className="text-sm ">{mentee.email}</p>
                                    </div>
                                </td>
                                <td className="p-5">{mentee.lessons} Lessons</td>
                                <td className="p-5">
                                    <div className="w-[105px] h-[5px] bg-[#f5f5f5] rounded-[2px]">
                                        <div className="w-[52.5px] h-[5px] bg-[#FFC145] rounded-[2px]"></div>
                                    </div>
                                </td>
                                <td className="p-5 flex items-center">
                                    <div className="w-[30px] h-[30px] bg-subtext rounded mr-3"></div>
                                    <div>
                                        <h4 className="text-text">{mentee.course}</h4>
                                        <p className="text-sm ">by {mentee.mentor}</p>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Performance Section */}
            <div className="bg-white p-5 rounded-lg md:col-span-2 font-medium text-[#1d1d1d]">
                <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl">Mentees Performance Details</h3>
                    <button
                        className=" bg-[#fff] bg-transparent border border-primary py-2 px-3 w-[100px] h-[30px] flex items-center justify-between rounded"
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
                <div className="flex justify-between items-center mb-4">
                    <h5 className="text-md font-normal text-xl">Progress</h5>
                    <Image
                        src="/dashboard/dots.svg"
                        alt="Dots Icon"
                        width={24}
                        height={24}
                        className="self-center"
                    />
                </div>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b  text-left text-xl">
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
                                <td className="p-3 text-primary">{mentee.attendance}</td>
                                <td className="p-3">
                                    <div className="relative w-[50px] h-[50px] flex items-center justify-center">
                                        <svg className="w-full h-full" viewBox="0 0 36 36">
                                            <circle
                                                className="text-[#FFC145] stroke-current"
                                                strokeWidth="3"
                                                fill="transparent"
                                                r="16"
                                                cx="18"
                                                cy="18"
                                            ></circle>
                                            <circle
                                                className="text-primary stroke-current"
                                                strokeWidth="3"
                                                fill="transparent"
                                                r="16"
                                                cx="18"
                                                cy="18"
                                                strokeDasharray={`${mentee.analysis}, 100`}
                                            ></circle>
                                        </svg>
                                        <span className="absolute font-bold">{mentee.analysis}%</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
            <div className="w-3/12">
                {/* Right Section: Calendar */}
                <ReusableCalendar
                    date={date}
                    setDate={setDate}
                    events={events}
                />
            </div>
        </div>
    );
};

export default Wrapper(Analytics);
