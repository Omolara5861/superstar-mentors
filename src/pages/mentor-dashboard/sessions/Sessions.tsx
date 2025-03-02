"use client"
import React, { useState } from "react";
import Wrapper from "../../../components/mentor-dashboard/wrapper/Wrapper";
import Card from '../../../components/dashboard/SessionCard';
import PreviousClassRecords from '../../../components/dashboard/PreviousClassRecords';
import UpcomingSessions from '../../../components/dashboard/UpcomingSessions';
import Image from "next/image";

const Sessions = () => {
    const [activeTab, setActiveTab] = useState("unchecked");

    // Example session data
    const sessions = [
        { part: "Music(Part 1)", time: "Live", mentor: "David" },
        { part: "Music(Part 2)", time: "10:00AM", mentor: "Sheik" },
        { part: "Music(Part 3)", time: "02:00PM", mentor: "Petra" },
        { part: "Music(Part 3)", time: "02:00PM", mentor: "Petra" },
    ];

    // Example avatar sets (adjust as needed)
    const avatarSets = [
        [
            { id: 1, src: "/dashboard/avatar1.png" },
            { id: 2, src: "/dashboard/avatar2.png" },
            { id: 3, src: "/dashboard/avatar3.png" },
        ],
        [
            { id: 1, src: "/dashboard/avatar1.png" },
            { id: 2, src: "/dashboard/avatar2.png" },
            { id: 3, src: "/dashboard/avatar3.png" },
        ],
        [
            { id: 1, src: "/dashboard/avatar1.png" },
            { id: 2, src: "/dashboard/avatar2.png" },
            { id: 3, src: "/dashboard/avatar3.png" },
        ],
        [
            { id: 1, src: "/dashboard/avatar1.png" },
            { id: 2, src: "/dashboard/avatar2.png" },
            { id: 3, src: "/dashboard/avatar3.png" },
        ],
    ];

    // Titles for the "Previous Class Records"
    const previousTitles = [
        "Steps in Videography",
        "How to Videograph your work",
        "How to handle your camera",
    ];

    // Titles for the "Upcoming Sessions"
    const upcomingSessionsList = [
        "Mentorship session with Omowunmi Dada",
        "Practical session in videography",
        "Practical session in videography",
        "Practical session in videography",
    ];

    const assignments = [
        { author: '/dashboard/author.png', mentee: "Mentee 3", course: "Videography", status: "Completed", file: "Download pdf." },
        { author: '/dashboard/author.png', mentee: "Mentee 2", course: "Videography", status: "Pending", file: null },
        { author: '/dashboard/author.png', mentee: "Mentee 1", course: "Videography", status: "Completed", file: "Download pdf." },
        { author: '/dashboard/author.png', mentee: "Mentee 4", course: "Videography", status: "Unchecked", file: null },
    ];

    const filteredAssignments = assignments.filter((assignment) => {
        if (activeTab === "unchecked") return assignment.status === "Unchecked";
        if (activeTab === "all") return true;
        return false;
    });

    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-center mt-3 mb-6">
                <h5 className="text-base font-semibold text-text">Today&apos;s Session</h5>
                <button
                    className=" rounded-lg bg-[#fff] bg-transparent border border-primary py-2 px-3 w-[168px] h-[54px] text-primary font-medium"
                >
                    Invite Mentees
                </button>
            </div>

            {/* Today's Session Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {sessions.map((session, index) => {
                    const isLive = session.time === "Live";
                    return (
                        <Card
                            key={index}
                            // Extract "Music" from "Music(Part x)" if you want separate title/subtitle
                            title="Music"
                            subtitle={session.part.replace("Music", "")}
                            isLive={isLive}
                            time={!isLive ? session.time : undefined}
                            filesCount={0}
                            mentorName={session.mentor}
                            mentorImage={`/dashboard/mentor.png`}
                            avatars={avatarSets[index]}
                        />
                    );
                })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {/* Previous Class Records */}
                <PreviousClassRecords titles={previousTitles} bg='bg-[#f5f5f5]' />
                {/* Upcoming Sessions */}
                <UpcomingSessions sessions={upcomingSessionsList} bg='bg-[#f5f5f5]' />
                {/* Assignments */}
                <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-md">
                    <p className="font-medium text-center text-subtext mb-2">Assignments</p>

                    {/* Tabs */}
                    <div className="flex justify-between border-b mb-4 text-sm">
                        {["Unchecked", "All", "View"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab.toLowerCase())}
                                className={`py-2 px-4 ${activeTab === tab.toLowerCase()
                                    ? "border-b-2 border-primary text-primary font-bold"
                                    : "text-gray-500 hover:text-primary"
                                    }`}
                            >
                                {tab} (0)
                            </button>
                        ))}
                    </div>

                    {/* Assignment List */}
                    <div className="space-y-4">
                        {assignments.length > 0 ? (
                            assignments.map((assignment, index) => (
                                <div key={index} className="flex justify-between items-center border-b pb-3 text-xs">
                                    <div className="flex gap-2 items-center">
                                        <Image width={40} height={40} src={assignment.author} alt="Author" className="h-fit" />
                                        <div>
                                            <h4 className=" font-medium text-text flex items-center">
                                              {assignment.mentee}
                                            </h4>
                                            <p className="text-subtext">{assignment.course}</p>
                                        </div>
                                    </div>
                                    <div>
                                        {assignment.file ? (
                                            <a href="#" className="text-primary text-sm font-medium underline">
                                                {assignment.file}
                                            </a>
                                        ) : (
                                            <span className="text-[#FB1515] text-sm font-medium">Pending</span>
                                        )}
                                    </div>
                                    <Image src="/dashboard/eye.svg" width={24} height={24} alt="Eye" />
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-sm text-center">No assignments found.</p>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Wrapper(Sessions);
