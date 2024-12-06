import Image from 'next/image';
import Wrapper from '../../../components/mentee-dashboard/wrapper/Wrapper';


function CoursesPage() {
    return (
        <>
            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 mb-4">
                    Dashboard → <span className="text-gray-800 font-medium">Courses</span>
                </div>

                {/* Header */}
                <h1 className="text-2xl font-bold mb-6">Courses</h1>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array(6)
                        .fill(0)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-lg bg-white shadow-sm"
                            >
                                <Image src='/dashboard/courses/course1.png' alt="Course"
                                    className="w-full h-40 object-cover rounded-t-lg" width={350} height={141} />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">Course Title</h3>
                                    <p className="text-gray-500 text-sm">Loral Joseph</p>
                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-green-600 font-medium">$50</span>
                                        <button className="px-4 py-2 text-sm text-green-600 border border-green-600 rounded hover:bg-green-50">
                                            Enroll
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </main>
        </>

    );
}
export default Wrapper(CoursesPage);