"use client"
import React, { useEffect, useState } from "react";
import Table from "../../../components/table/Table";
import Wrapper from "../../../components/mentor-dashboard/wrapper/Wrapper";
import Image from "next/image";


type Assignment = {
    name: string;
    courseEnrolled: string;
    modeOfSubmission: string;
    submissionDate: string;
    score?: string;
    status: string;
};

const assignments: Assignment[] = [
    {
        courseEnrolled: "Choreography",
        name: "David John",
        modeOfSubmission: "Download.pdf",
        submissionDate: "26-Sep-2025",
        score: "0",
        status: "Checked/ Mark",
    },
    {
        courseEnrolled: "Videography",
        name: "Deborah John",
        modeOfSubmission: "Download.pdf",
        submissionDate: "26-Sep-2025",
        score: "0",
        status: "Checked/ Mark",
    },
    {
        courseEnrolled: "Comedy",
        name: "Evans Jude",
        modeOfSubmission: "Download.pdf",
        submissionDate: "26-Sep-2025",
        score: "0",
        status: "Checked/ Mark",
    },
    {
        courseEnrolled: "Music",
        name: "Sarah Sav",
        modeOfSubmission: "Download.pdf",
        submissionDate: "26-Sep-2025",
        score: "0",
        status: "Checked/ Mark",
    },
    {
        courseEnrolled: "Skit-Makers",
        name: "John Micheal",
        modeOfSubmission: "Download.pdf",
        submissionDate: "26-Sep-2025",
        score: "0",
        status: "Checked/ Mark",
    },
    {
        courseEnrolled: "Producers",
        name: "Grace Son",
        modeOfSubmission: "Download.pdf",
        submissionDate: "26-Sep-2025",
        score: "0",
        status: "Checked/ Mark",
    },
    {
        courseEnrolled: "Cinematography",
        name: "John Doe",
        modeOfSubmission: "Download.pdf",
        submissionDate: "26-Sep-2025",
        score: "0",
        status: "Checked/ Mark",
    },
    {
        courseEnrolled: "Directors",
        name: "Revival Sound",
        modeOfSubmission: "Download.pdf",
        submissionDate: "26-Sep-2025",
        score: "0",
        status: "Checked/ Mark",
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

    useEffect(() => {
        setCurrentPage(1);
    }, []);

    const paginatedData = paginate(assignments, currentPage, itemsPerPage);

    // Navigation for pagination
    const nextPage = () => {
        setCurrentPage((prev) => (prev < Math.ceil(assignments.length / itemsPerPage) ? prev + 1 : prev));
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const columns = [
        { header: "NAMES", accessor: "name" },
        { header: "COURSE ENROLLED", accessor: "courseEnrolled" },
        {
            header: "MODE OF Submission", accessor: "modeOfSubmission",
            render: (value: any) => {
                return (
                    <span className={`px-2 py-1 flex gap-1 rounded-full text-primary underline`}>
                        {value}
                    </span>
                );
            }
         },
        { header: "score", accessor: "score" },
        { header: "Submission Date", accessor: "submissionDate" },
        {
            header: "Status", accessor: "status", render: (value: any) => {
                let textColor, icon;
                switch (value) {
                    case "Completed":
                        textColor = "text-green-500";
                        icon = "/dashboard/online.svg";
                        break;
                    case "Checked/ Mark":
                        textColor = "text-[#CC8A06]";
                        icon = "/dashboard/pending.svg";
                        break;
                    case "Grading":
                        textColor = "text-blue-500";
                        icon = "/dashboard/online.svg";
                        break;
                }
                return (
                                   <span className={`px-2 py-1 flex gap-1 rounded-full ${textColor}`}>
                                       {value}
                                   </span>
                               );
            }
        },
    ];


    return (
        <div className="h-[90vh] relative">
            <div className="mt-6 flex gap-5 justify-end">
                <div className="relative">
                    <Image
                        src="/dashboard/search.svg"
                        alt="Search Icon"
                        width={24}
                        height={24}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-[505px] h-[57px] pl-10 pr-4 py-2 border border-gray-300 bg-transparent rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                </div>
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
            </div>

            {/* Active Tab Content */}
            <Table data={paginatedData} columns={columns} />

            {/* Pagination */}
            <div className="flex justify-between absolute -bottom-5 right-0 left-0">
                <p className="mt-4 text-sm text-[#555555] font-bold">
                    Showing {Math.min((currentPage - 1) * itemsPerPage + 1, assignments.length)} to {Math.min(currentPage * itemsPerPage, assignments.length)} of {assignments.length} results
                </p>
                <div className="flex gap-2">
                    <button onClick={prevPage} disabled={currentPage === 1}><Image
                        src="/dashboard/angle-left.svg"
                        alt="Previous Page"
                        width={16}
                        height={16}
                        className="cursor-pointer"
                    /></button>
                    <button onClick={nextPage} disabled={currentPage === Math.ceil(assignments.length / itemsPerPage)}><Image
                        src="/dashboard/angle-right.svg"
                        alt="Next Page"
                        width={16}
                        height={16}
                        className="cursor-pointer"
                    /></button>
                </div>
            </div>
        </div>
    );
};

export default Wrapper(AssignmentsPage);
