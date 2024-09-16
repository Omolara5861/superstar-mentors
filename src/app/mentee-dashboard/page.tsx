import Wrapper from "../../components/mentee-dashboard/wrapper/Wrapper";


function Dashboard() {
    return (
               <>
                {/* Dashboard content */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Enrolled Courses Card */}
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">0 Enrolled Courses</h3>
                        <p className="text-gray-500 mt-2">View details</p>
                    </div>

                    {/* Certificates Card */}
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">0 Certificates</h3>
                        <p className="text-gray-500 mt-2">View details</p>
                    </div>

                    {/* Profile Strength */}
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Profile Strength</h3>
                        <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                            <div className="bg-yellow-400 h-2 w-1/4 rounded-full"></div>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">Poor</p>
                    </div>
                </div>

                {/* Recent Sessions */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold">Recent Sessions</h2>
                    <div className="mt-6 space-y-4">
                        <div className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-semibold">Upcoming mentorship session with Omowunmi Dada</h3>
                                <p className="text-gray-500">22/08/2024 | 10:00am</p>
                            </div>
                            <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Join session</button>
                        </div>

                        {/* Other session cards */}
                    </div>
                </div>
               </>

    );
}
export default Wrapper(Dashboard)