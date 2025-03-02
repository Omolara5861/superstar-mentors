"use client"
import Image from "next/image";
import React, { useState } from "react";

const SessionsDetails = () => {
    const [activeTab, setActiveTab] = useState("Overview");
    const [expandedTopics, setExpandedTopics] = useState<{ [key: string]: boolean }>({});
    const [isExpandedAll, setIsExpandedAll] = useState(false);

    const topics = [
        { id: 1, title: "Introduction to Karate", details: "Learn the basics of Karate." },
        { id: 2, title: "What is the following topic all about", details: "Explore the topic in detail." },
        { id: 3, title: "Advanced Karate Techniques", details: "Master advanced Karate skills." },
        { id: 4, title: "History of Karate", details: "Discover the history behind Karate." },
        // Add more topics as needed
    ];

    const toggleExpandAll = () => {
        const newExpandedState = !isExpandedAll;
        setExpandedTopics(
            topics.reduce((acc, topic) => {
                acc[topic.id] = newExpandedState;
                return acc;
            }, {} as { [key: string]: boolean })
        );
        setIsExpandedAll(newExpandedState);
    };

    const toggleTopic = (id: number) => {
        setExpandedTopics((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <div className="flex flex-col lg:flex-row">

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Header */}
                <h3 className="text-2xl font-medium text-[#555555]">Sessions</h3>
                <div className=" text-[#555555] mb-8">
                    Dashboard → Sessions
                </div>

                <div className="bg-white border-[0.5px] border-[#c4c2c2] p-6 rounded-[20px]">
                    {/* Video Player Section */}
                    <div>
                        <p className="font-medium text-subtext mb-4">
                            Introduction to Videography, 28 Nov 2024
                        </p>
                        <div className="h-[310px] bg-subtext rounded-lg mb-4"></div>
                        <div className="flex justify-center space-x-4 mt-[-70px]">
                            <Image src='/dashboard/audio.svg' alt="Audio" width={40} height={40} />
                            <Image src='/dashboard/video.svg' alt="Audio" width={40} height={40} />
                            <Image src='/dashboard/mute.svg' alt="Audio" width={40} height={40} />
                            <Image src='/dashboard/end.svg' alt="Audio" width={40} height={40} />
                            <Image src='/dashboard/download.svg' alt="Audio" width={40} height={40} />
                            <Image src='/dashboard/members.svg' alt="Audio" width={40} height={40} />
                        </div>
                        <h3 className="text-2xl font-medium text-text mt-8">Getting started with Music</h3>
                        <div className="flex justify-between">
                            <div className="flex gap-2 my-2">
                                <Image src='/dashboard/img.svg' alt="Course" width={50} height={50} />
                                <div>
                                    <p className="text-text text-lg font-medium">Eze Babatunde</p>
                                    <p className="text-subtext">
                                        Music Mentor
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <Image src='/dashboard/instagram.svg' alt="Instagram" width={20} height={20} />
                                <Image src='/dashboard/whatsapp.svg' alt="Instagram" width={20} height={20} />
                                <Image src='/dashboard/x.svg' alt="Instagram" width={20} height={20} />
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-[0.5px] border-[#FFC145] bg-[#f5f5f5] p-2 mb-4 rounded-full lg:w-1/3 w-full">
                            {["Overview", "Resources", "Description"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 text-sm font-medium ${activeTab === tab
                                        ? " text-primary"
                                        : "text-gray-600 hover:text-green-600"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div>
                            {activeTab === "Overview" && (
                                <p className="text-sm text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque
                                    aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac
                                    sed.
                                    Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed.
                                    Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non ac blandit elit pulvinar vulputate lorem ac sed. 
                                </p>
                            )}
                            {activeTab === "Resources" && (
                                <p className="text-sm text-gray-600">
                                    Resources for this session will be listed here.
                                </p>
                            )}
                            {activeTab === "Description" && (
                                <p className="text-sm text-gray-600">
                                    A detailed description of the session will go here.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-72 w-full p-4">
                {/* Learning Reminder */}
                <div className="bg-[#03103A] text-[#f5f5f5] p-4 rounded-lg mb-6 shadow-[0px_2px_2px_0px_#0000000D] text-xs">
                    <p className="uppercase font-medium mb-3">Learning Reminder</p>
                    <p className="text-sm mb-1">
                        Set Your Learning Time
                    </p>
                    <p>
                        Set your learning time as comfortable as you want
                    </p>
                </div>

                {/* Course Topics */}
                <div className="lg:w-72 w-full bg-white border-[0.5px] border-[#c4c2c2] p-4 rounded-lg">
                    {/* Course Topics */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-sm font-medium text-subtext">Course</h3>
                            <button
                                onClick={toggleExpandAll}
                                className="text-sm text-[#D3900A] underline"
                            >
                                {isExpandedAll ? "Collapse All" : "Expand All"}
                            </button>
                        </div>
                        <ul className="space-y-2">
                            {topics.map((topic) => (
                                <li key={topic.id} className="pb-2">
                                    <div
                                        onClick={() => toggleTopic(topic.id)}
                                        className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg bg-[#f5f5f5] border-[0.5] border-[#f5f5f5]"
                                    >
                                        <Image src='/dashboard/bulb.svg' alt="Bulb" width={30} height={30} />
                                        <span className="text-[15px] text-text">{topic.title}</span>
                                    </div>
                                    {expandedTopics[topic.id] && (
                                        <div className="mt-2 text-sm text-gray-600 ml-6 flex gap-2 items-center">
                                            <Image src='/dashboard/open-book.svg' alt="Bulb" width={30} height={30} />
                                            {topic.details}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SessionsDetails;
