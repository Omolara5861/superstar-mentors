import Image from 'next/image';
import Wrapper from '../../../components/mentee-dashboard/wrapper/Wrapper';


function ProfilePage() {
    return (
        <main className="flex-1 p-6">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-4">
                Dashboard → <span className="text-gray-800 font-medium">Profile</span>
            </div>

            {/* Header */}
            <h1 className="text-2xl font-bold mb-6">Profile</h1>

            {/* Profile Details */}
            <div className="bg-white shadow-md rounded-lg p-6">
                {/* User Info */}
                <div className="flex items-center space-x-4 mb-6">
                    <Image src='/dashboard/profile.png' alt='Profile pic' width={80}
                    height={80} />
                    <div>
                        <h2 className="text-xl font-semibold">Jack Adams</h2>
                        <p className="text-gray-500">Videographer, Lagos, Nigeria</p>
                    </div>
                </div>

                {/* Personal Information */}
                <section className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-600">
                                First Name
                            </label>
                            <input
                                type="text"
                                value="Jack"
                                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-600">
                                Last Name
                            </label>
                            <input
                                type="text"
                                value="Adams"
                                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-600">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value="jackadams@gmail.com"
                                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-600">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                value="+2348065845686"
                                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <label className="text-sm font-medium text-gray-600">
                                Bio
                            </label>
                            <textarea
                                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                rows={3}
                            >
                                Videographer
                            </textarea>
                        </div>
                    </div>
                </section>

                {/* Address */}
                <section>
                    <h3 className="text-lg font-semibold mb-4">Address</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-600">
                                Country
                            </label>
                            <input
                                type="text"
                                value="Nigeria"
                                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-600">
                                City/State
                            </label>
                            <input
                                type="text"
                                value="Sokoto"
                                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <label className="text-sm font-medium text-gray-600">
                                House Address
                            </label>
                            <textarea
                                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                rows={2}
                            >
                                No 3, Adu Street
                            </textarea>
                        </div>
                    </div>
                </section>
            </div>
        </main>

    );
}
export default Wrapper(ProfilePage);