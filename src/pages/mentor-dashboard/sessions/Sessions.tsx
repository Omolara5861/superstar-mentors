"use client"
import React, { useState } from "react";
import Wrapper from "../../../components/mentor-dashboard/wrapper/Wrapper";

const Sessions = () => {
    const [activeTab, setActiveTab] = useState("unchecked");

    const assignments = [
        { mentee: "Mentee 3", course: "Videography", status: "Completed", file: "Download pdf." },
        { mentee: "Mentee 2", course: "Videography", status: "Pending", file: null },
        { mentee: "Mentee 1", course: "Videography", status: "Completed", file: "Download pdf." },
        { mentee: "Mentee 4", course: "Videography", status: "Unchecked", file: null },
    ];

    const filteredAssignments = assignments.filter((assignment) => {
        if (activeTab === "unchecked") return assignment.status === "Unchecked";
        if (activeTab === "all") return true;
        return false;
    });

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Title */}
            <h2 className="text-lg font-bold text-center mb-4">Assignments</h2>

            {/* Tabs */}
            <div className="flex justify-around border-b mb-4 text-sm">
                {["Unchecked", "All", "View"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase())}
                        className={`py-2 px-4 ${activeTab === tab.toLowerCase()
                                ? "border-b-2 border-green-600 text-green-600 font-bold"
                                : "text-gray-500 hover:text-green-600"
                            }`}
                    >
                        {tab} (0)
                    </button>
                ))}
            </div>

            {/* Assignment List */}
            <div className="space-y-4">
                {filteredAssignments.length > 0 ? (
                    filteredAssignments.map((assignment, index) => (
                        <div key={index} className="flex justify-between items-center border-b pb-3">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                <div>
                                    <h4 className="font-bold">{assignment.mentee}</h4>
                                    <p className="text-sm text-gray-500">{assignment.course}</p>
                                </div>
                            </div>
                            <div>
                                {assignment.file ? (
                                    <a href="#" className="text-green-600 text-sm font-medium hover:underline">
                                        {assignment.file}
                                    </a>
                                ) : (
                                    <span className="text-red-600 text-sm font-medium">Pending</span>
                                )}
                            </div>
                            EYE
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-sm text-center">No assignments found.</p>
                )}
            </div>
        </div>
    );
};

export default Wrapper(Sessions);
