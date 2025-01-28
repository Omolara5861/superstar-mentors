"use client"
import React, { useEffect, useState } from "react";
import UploadModal from "../../../components/modal/Upload";
import Table from "../../../components/table/Table";
import Wrapper from "../../../components/mentor-dashboard/wrapper/Wrapper";
import Image from "next/image";


type Assignment = {
    taskTitle: string;
    description: string;
    course?: string;
    startDate: string;
    endDate: string;
    status?: string;
};

const assignments: Assignment[] = [
    {
        taskTitle: "Introduction to Photography",
        description: "Submission: File Upload",
        course: "Photography",
        startDate: "24-Sep-2023 04:46 PM",
        endDate: "24-Sep-2023 04:46 PM",
        status: "Completed",
    },
    {
        taskTitle: "Introduction to Photography",
        description: "Submission: File Upload",
        startDate: "24-Sep-2023 04:46 PM",
        course: "Photography",
        endDate: "24-Sep-2023 04:46 PM",
        status: "Completed",
    },
    {
        taskTitle: "Introduction to Photography",
        description: "Submission: File Upload",
        startDate: "24-Sep-2023 04:46 PM",
        course: "Photography",
        endDate: "24-Sep-2023 04:46 PM",
        status: "Completed",
    },
    {
        taskTitle: "Introduction to Photography",
        description: "Submission: File Upload",
        startDate: "24-Sep-2023 04:46 PM",
        course: "Photography",
        endDate: "24-Sep-2023 04:46 PM",
        status: "Completed",
    },
    {
        taskTitle: "Introduction to Photography",
        description: "Submission: File Upload",
        startDate: "24-Sep-2023 04:46 PM",
        course: "Photography",
        endDate: "24-Sep-2023 04:46 PM",
        status: "Completed",
    },
    {
        taskTitle: "Introduction to Photography",
        description: "Submission: File Upload",
        startDate: "24-Sep-2023 04:46 PM",
        course: "Photography",
        endDate: "24-Sep-2023 04:46 PM",
        status: "Completed",
    },
    {
        taskTitle: "Introduction to Photography",
        description: "Submission: File Upload",
        startDate: "24-Sep-2023 04:46 PM",
        course: "Photography",
        endDate: "24-Sep-2023 04:46 PM",
        status: "Completed",
    },
    {
        taskTitle: "Introduction to Photography",
        description: "Submission: File Upload",
        startDate: "24-Sep-2023 04:46 PM",
        course: "Photography",
        endDate: "24-Sep-2023 04:46 PM",
        status: "Completed",
    },
    {
        taskTitle: "Introduction to Photography",
        description: "Submission: File Upload",
        startDate: "24-Sep-2023 04:46 PM",
        course: "Photography",
        endDate: "24-Sep-2023 04:46 PM",
        status: "Completed",
    },
    {
        taskTitle: "Introduction to Photography",
        description: "Submission: File Upload",
        startDate: "24-Sep-2023 04:46 PM",
        course: "Photography",
        endDate: "24-Sep-2023 04:46 PM",
        status: "Completed",
    },
    {
        taskTitle: "Introduction to Photography",
        description: "Submission: File Upload",
        startDate: "24-Sep-2023 04:46 PM",
        course: "Photography",
        endDate: "24-Sep-2023 04:46 PM",
        status: "Completed",
    },
    {
        taskTitle: "Introduction to Photography",
        description: "Submission: File Upload",
        startDate: "24-Sep-2023 04:46 PM",
        course: "Photography",
        endDate: "24-Sep-2023 04:46 PM",
        status: "Completed",
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
// Pagination helper function
const paginate = (data: any, currentPage: any, itemsPerPage: any) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
};

const AssignmentsPage = () => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [activeTab, setActiveTab] = useState("all");
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

    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab]);

        const data = getActiveTabData();
        const paginatedData = paginate(data, currentPage, itemsPerPage);

    // Navigation for pagination
    const nextPage = () => {
        setCurrentPage((prev) => (prev < Math.ceil(data.length / itemsPerPage) ? prev + 1 : prev));
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const columns = [
        { header: "Task Title", accessor: "taskTitle" },
        { header: "Description", accessor: "description" },
        { header: "Start Date", accessor: "startDate" },
        { header: "End Date", accessor: "endDate" },
        ...(activeTab !== "newTask" ? [{
            header: "Status",
            accessor: "status",
            render: (value: any, row: any) => {
                let textColor, icon;
                switch (value) {
                    case "Completed":
                        textColor = "text-green-500";
                        icon = "/dashboard/online.svg";
                        break;
                    case "Pending":
                        textColor = "text-yellow-500";
                        icon = "/dashboard/pending.svg";
                        break;
                    case "Grading":
                        textColor = "text-blue-500";
                        icon = "/dashboard/online.svg";
                        break;
                }
                return (
                    <span className={`px-2 py-1 flex gap-1 rounded-full text-xs ${textColor}`}>
                        <Image src={icon || ''} alt="Status Icon" width={10} height={10} />
                        {value}
                    </span>
                );
            }
        }] : [])  // Conditionally add the status column if not on the newTask tab
    ];


    return (
        <div className="h-[90vh] relative">
            {/* Header */}
            <h3 className="text-2xl font-medium text-[#555555]">Assignments</h3>
            <div className=" text-[#555555] mb-8">
                Dashboard → Assignments
            </div>

            {/* Tabs */}
            <div className="flex items-center space-x-4 mb-4 ">
                {["all", "newTask", "submitted", "grading"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 w-[182px] h-[50px] rounded-[50px] flex justify-between items-center border border-primary font-medium ${activeTab === tab
                            ? "bg-primary text-white active1"
                            : "bg-white border text-primary hover:bg-primary hover:text-white"
                            }`}
                    >
                        {tab === "all"
                            ? "All"
                            : tab === "newTask"
                                ? "New Task"
                                : tab === "submitted"
                                    ? "Submitted Task"
                                    : "Grading"}
                        <Image src='/dashboard/task.svg' alt="Task" width={24} height={24} />
                    </button>
                ))}
            </div>
            <div className="ml-auto flex justify-end space-x-4">
                <button
                    className=" bg-[#fff] bg-transparent border border-primary py-2 px-3 w-[190px] h-[57px] flex items-center justify-between rounded"
                    onClick={() => alert("Filter logic not implemented yet.")}
                >
                    Filter <Image
                        src="/dashboard/filter.svg"
                        alt="Sort Icon"
                        width={16}
                        height={16}
                        className="self-center"
                    />
                </button>

                {
                    activeTab === "newTask" &&
                    <button
                        onClick={() => setModalOpen(true)}
                        className="px-4 py-2 bg-primary text-white rounded justify-center w-[190px] h-[57px] flex items-center hover:bg-green-700"
                    >
                        Upload
                    </button>
                }
            </div>

            {/* Active Tab Content */}
            <Table data={paginatedData} columns={columns} />

            {/* Pagination */}
            <div className="flex justify-between absolute -bottom-5 right-0 left-0">
                <p className="mt-4 text-sm text-[#555555] font-bold">
                    Showing {Math.min((currentPage - 1) * itemsPerPage + 1, data.length)} to {Math.min(currentPage * itemsPerPage, data.length)} of {data.length} results
                </p>
                <div className="flex gap-2">
                    <button onClick={prevPage} disabled={currentPage === 1}><Image
                        src="/dashboard/angle-left.svg"
                        alt="Previous Page"
                        width={16}
                        height={16}
                        className="cursor-pointer"
                    /></button>
                    <button onClick={nextPage} disabled={currentPage === Math.ceil(data.length / itemsPerPage)}><Image
                        src="/dashboard/angle-right.svg"
                        alt="Next Page"
                        width={16}
                        height={16}
                        className="cursor-pointer"
                    /></button>
                </div>
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
