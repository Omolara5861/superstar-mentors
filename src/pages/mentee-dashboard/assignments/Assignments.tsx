import Wrapper from '../../../components/mentee-dashboard/wrapper/Wrapper';
import Table from '../../../components/table/Table';

type Assignment = {
    taskTitle: string;
    description: string;
    startDate: string;
    endDate: string;
    status: string;
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
    // Add more assignments here...
];

const AssignmentsPage = () => {
    const columns = [
        { header: "Task Title", accessor: "taskTitle" },
        { header: "Description", accessor: "description" },
        { header: "Start Date", accessor: "startDate" },
        { header: "End Date", accessor: "endDate" },
        {
            header: "Status",
            accessor: "status",
            render: (value: string) => (
                <span
                    className={`px-2 py-1 rounded-full text-xs ${value === "Completed"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                >
                    {value}
                </span>
            ),
        },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <h1 className="text-2xl font-bold mb-6">Assignments</h1>

            {/* Filters */}
            <div className="flex items-center space-x-4 mb-4">
                <button className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700">
                    All
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded shadow hover:bg-gray-50">
                    New Task
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded shadow hover:bg-gray-50">
                    Submitted Task
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded shadow hover:bg-gray-50">
                    Grading
                </button>
                <div className="ml-auto flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Filters"
                        className="px-3 py-2 border border-gray-300 rounded shadow-sm"
                    />
                    <button className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700">
                        Upload
                    </button>
                </div>
            </div>

            {/* Table */}
            <Table data={assignments} columns={columns} />

            {/* Pagination */}
            <div className="mt-4 text-sm text-gray-600">
                Showing 1 to 10 of {assignments.length} results
            </div>
        </div>
    );
};

export default Wrapper(AssignmentsPage);