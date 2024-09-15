import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-100 p-4">
            <div className="mb-10">
                <Image width={172} height={56} src="/f-logo.png" alt="Footer Logo" />
            </div>
            <nav>
                <ul>
                    <li className="mb-6">
                        <Link className="flex items-center text-gray-600 hover:text-green-500" href="/dashboard">
                            <span className="ml-3">Dashboard</span>
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link className="flex items-center text-gray-600 hover:text-green-500" href="/courses">
                            <span className="ml-3">Courses</span>
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link className="flex items-center text-gray-600 hover:text-green-500" href="/sessions">
                            <span className="ml-3">Sessions</span>
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link className="flex items-center text-gray-600 hover:text-green-500" href="/assignments">
                            <span className="ml-3">Assignments</span>
                        </Link>
                    </li>
                    <li className="mb-6">
                        <Link className="flex items-center text-gray-600 hover:text-green-500" href="/messages">
                            <span className="ml-3">Messages</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;