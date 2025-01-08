import Image from 'next/image';
import Wrapper from '../../../components/mentee-dashboard/wrapper/Wrapper';

const courses = [
    {
        id: 1,
        title: 'Videography',
        instructor: 'Loral Joseph',
        price: '$50',
        lessons: '12 lessons',
        imagePath: '/dashboard/courses/course1.png'
    },
    {
        id: 2,
        title: 'Music',
        instructor: 'Loral Joseph',
        price: '$50',
        lessons: '12 lessons',
        imagePath: '/dashboard/courses/course2.png'
    },
    {
        id: 3,
        title: 'Make-Up',
        instructor: 'Loral Joseph',
        price: '$50',
        lessons: '12 lessons',
        imagePath: '/dashboard/courses/course3.png'
    },
    {
        id: 4,
        title: 'Choerography',
        instructor: 'Loral Joseph',
        price: '$50',
        lessons: '12 lessons',
        imagePath: '/dashboard/courses/course4.png'
    },
    {
        id: 5,
        title: 'Skit-Makers',
        instructor: 'Loral Joseph',
        price: '$50',
        lessons: '12 lessons',
        imagePath: '/dashboard/courses/course5.png'
    },
    {
        id: 6,
        title: 'Cinematography',
        instructor: 'Loral Joseph',
        price: '$50',
        lessons: '12 lessons',
        imagePath: '/dashboard/courses/course6.png'
    },
];

function CoursesPage() {
    return (
        <>
            {/* Main Content */}
            <main className="flex-1">
                {/* Header */}
                <h3 className="text-2xl font-bold text-[#555555]">Courses</h3>
                <div className=" text-[#555555] mb-8">
                    Dashboard → Courses
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white border-[#d4d1d1] px-3 py-6 rounded-[10px] border-[0.3px]">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="border border-[#F5F5F5] shadow-[0px_2px_4px_0px_#0000000D] rounded-[10px] bg-white relative"
                        >
                            <div className="badge bg-[#FFC145] w-[85px] text-center text-sm rounded-sm absolute right-1 top-1">{course.lessons}</div>
                            <Image src={course.imagePath} alt="Course"
                                className="w-full h-40 object-cover rounded-t-lg" width={350} height={141} />
                            <div className="p-3">
                                <div className="flex items-center justify-between mb-5 font-medium">
                                    <div>
                                        <p className="text-text">{course.title}</p>
                                        <p className="text-subtext text-sm">{course.instructor}</p>
                                    </div>
                                    <span className="text-primary border border-[#FFC145] py-1 px-2 rounded-[5px]">{course.price}</span>
                                </div>
                                <button className="px-4 py-2 text-sm text-primary border border-primary rounded hover:bg-green-50 w-full">
                                    Enroll
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
export default Wrapper(CoursesPage);
