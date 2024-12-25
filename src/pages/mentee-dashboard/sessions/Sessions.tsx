import Wrapper from '../../../components/mentee-dashboard/wrapper/Wrapper';


function SessionsPage() {
    return (
            <main className="flex-1 p-6">
                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 mb-4">
                    Dashboard → <span className="text-gray-800 font-medium">Sessions</span>
                </div>

                {/* Current Session Header */}
                <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between mb-6">
                    <div>
                        <p className="text-sm text-gray-500">Introduction to Videography</p>
                        <h2 className="text-lg font-semibold">
                            Eze Babatunde (Lecturer in Charge)
                        </h2>
                    </div>
                    <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
                        Join Session
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Sessions Grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Array(6)
                            .fill(0)
                            .map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-sm border border-gray-200 rounded-lg p-4"
                                >
                                    <div className="h-40 bg-gray-200 rounded mb-4"></div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        Course Name - Headline
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-4">Rose Effiong</p>
                                    <a
                                        href="#"
                                        className="text-green-600 font-medium hover:underline"
                                    >
                                        View Now
                                    </a>
                                </div>
                            ))}
                    </div>

                    {/* Sidebar: Previous Records and Upcoming Sessions */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Previous Class Records */}
                        <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-4">
                            <h3 className="text-lg font-semibold mb-4">Previous Class Records</h3>
                            <div className="space-y-3">
                                {["Steps in Videography", "How to Videograph your work", "How to handle your camera"].map(
                                    (title, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm text-gray-800 font-medium">
                                                    {title}
                                                </p>
                                                <p className="text-sm text-gray-500">22/08/2024</p>
                                            </div>
                                            <button className="text-green-600">
                                                <i className="icon-play"></i>
                                            </button>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Upcoming Sessions */}
                        <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-4">
                            <h3 className="text-lg font-semibold mb-4">Upcoming Sessions</h3>
                            <div className="space-y-3">
                                {["Mentorship session with Omowunmi Dada", "Practical session in videography"].map(
                                    (title, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm text-gray-800 font-medium">
                                                    {title}
                                                </p>
                                                <p className="text-sm text-gray-500">9AM - 10AM, 22/08/2024</p>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    );
}
export default Wrapper(SessionsPage);