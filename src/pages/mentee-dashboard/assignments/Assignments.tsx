"use client"
import React, { useState } from "react";
import UploadModal from "../../../components/modal/Upload";
import Table from "../../../components/table/Table";
import Wrapper from "../../../components/mentee-dashboard/wrapper/Wrapper";


type Assignment = {
    taskTitle: string;
    description: string;
    startDate: string;
    endDate: string;
    status?: string;
};

const assignments: Assignment[] = [
    {
        taskTitle: "Introduction to Photography",
        description: "Submission: File Upload",
        startDate: "24-Sep-2023 04:46 PM",
        endDate: "24-Sep-2023 04:46 PM",
        status: "Completed",
    },
    {
        taskTitle: "Introduction to Photography",
        description: "Submission: File Upload",
        startDate: "24-Sep-2023 04:46 PM",
        endDate: "24-Sep-2023 04:46 PM",
        status: "Pending",
    },
];

const newTasks: Assignment[] = [
    {
        taskTitle: "Advanced Videography Techniques",
        description: "Submission: File Upload",
        startDate: "25-Sep-2023 02:00 PM",
        endDate: "30-Sep-2023 06:00 PM",
    },
];

const submittedTasks: Assignment[] = [
    {
        taskTitle: "Lighting and Composition",
        description: "Submission: File Upload",
        startDate: "20-Sep-2023 03:00 PM",
        endDate: "23-Sep-2023 07:00 PM",
        status: "Completed",
    },
    {
        taskTitle: "Editing Basics",
        description: "Submission: File Upload",
        startDate: "18-Sep-2023 01:00 PM",
        endDate: "21-Sep-2023 05:00 PM",
        status: "Pending",
    },
];

const gradingTasks: Assignment[] = [
    {
        taskTitle: "Project Evaluation",
        description: "Submission: File Upload",
        startDate: "15-Sep-2023 10:00 AM",
        endDate: "20-Sep-2023 04:00 PM",
        status: "Grading",
    },
];

const AssignmentsPage = () => {
    const [activeTab, setActiveTab] = useState("all"); // Active tab state
    const [isModalOpen, setModalOpen] = useState(false);

    const getActiveTabData = () => {
        switch (activeTab) {
            case "newTask":
                return newTasks;
            case "submitted":
                return submittedTasks;
            case "grading":
                return gradingTasks;
            default:
                return assignments;
        }
    };

    const columns = [
        { header: "Task Title", accessor: "taskTitle" },
        { header: "Description", accessor: "description" },
        { header: "Start Date", accessor: "startDate" },
        { header: "End Date", accessor: "endDate" },
        {
            header: "Status",
            accessor: "status",
            render: (value: string | undefined) => {
                if (!value) return null;
                let bgColor, textColor;
                if (value === "Completed") {
                    bgColor = "bg-green-100";
                    textColor = "text-green-600";
                } else if (value === "Pending") {
                    bgColor = "bg-yellow-100";
                    textColor = "text-yellow-600";
                } else if (value === "Grading") {
                    bgColor = "bg-blue-100";
                    textColor = "text-blue-600";
                }
                return (
                    <span className={`px-2 py-1 rounded-full text-xs ${bgColor} ${textColor}`}>
                        {value}
                    </span>
                );
            },
        },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Page Header */}
            <h1 className="text-2xl font-bold mb-6">Assignments</h1>

            {/* Tabs */}
            <div className="flex items-center space-x-4 mb-4">
                {["all", "newTask", "submitted", "grading"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded shadow ${activeTab === tab
                                ? "bg-green-600 text-white"
                                : "bg-white border border-gray-300 hover:bg-gray-50"
                            }`}
                    >
                        {tab === "all"
                            ? "All"
                            : tab === "newTask"
                                ? "New Task"
                                : tab === "submitted"
                                    ? "Submitted Task"
                                    : "Grading"}
                    </button>
                ))}
                <div className="ml-auto flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Filters"
                        className="px-3 py-2 border border-gray-300 rounded shadow-sm"
                    />
                    <button
                        onClick={() => setModalOpen(true)}
                        className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700"
                    >
                        Upload
                    </button>
                </div>
            </div>

            {/* Active Tab Content */}
            <Table data={getActiveTabData()} columns={columns} />

            {/* Pagination */}
            <div className="mt-4 text-sm text-gray-600">
                Showing 1 to {getActiveTabData().length} of {getActiveTabData().length} results
            </div>

            {/* Upload Modal */}
            {isModalOpen && (
                <UploadModal
                    onClose={() => setModalOpen(false)}
                    onSuccess={() => alert("File uploaded successfully!")}
                    onError={() => alert("File upload failed!")}
                />
            )}
        </div>
    );
};

export default Wrapper(AssignmentsPage);
