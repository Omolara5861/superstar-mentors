import Wrapper from '../../../components/mentee-dashboard/wrapper/Wrapper';


function MessagesPage() {
    return (
            <main className="flex-1 p-6">
                <div className="flex h-full">
                    {/* Conversation List */}
                    <div className="w-1/3 bg-white border-r border-gray-200 shadow-md">
                        <div className="p-4 border-b">
                            <h2 className="text-lg font-bold">Messages</h2>
                            <input
                                type="text"
                                placeholder="Search"
                                className="mt-2 w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <ul className="overflow-y-auto h-[calc(100%-100px)]">
                            {Array(10)
                                .fill(0)
                                .map((_, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center space-x-4 px-4 py-3 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-800">
                                                Mentor {index + 1}
                                            </p>
                                            <p className="text-xs text-gray-500 truncate">
                                                Hey Admin, kindly update my profile picture in order to
                                                reflect
                                            </p>
                                        </div>
                                        <span className="text-xs text-gray-400">20min ago</span>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    {/* Active Chat Window */}
                    <div className="flex-1 bg-white shadow-md">
                        <div className="flex items-center justify-between p-4 border-b">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                                <div>
                                    <h3 className="text-sm font-medium">Deborah John</h3>
                                    <p className="text-xs text-green-600">Online</p>
                                </div>
                            </div>
                            <button className="text-gray-500 hover:text-gray-700">
                                <i className="icon-more"></i>
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex flex-col justify-between h-[calc(100%-100px)]">
                            <div className="p-4 space-y-4 overflow-y-auto">
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                                    <div className="bg-gray-100 p-3 rounded-md">
                                        <p className="text-sm">
                                            Hi mentor, I want to be available for today’s session.
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">10:44 AM</p>
                                    </div>
                                </div>

                                <div className="flex justify-end items-start space-x-3">
                                    <div className="bg-green-600 text-white p-3 rounded-md">
                                        <p className="text-sm">
                                            Hi Deborah, the session starts at 10:00 AM.
                                        </p>
                                        <p className="text-xs text-gray-200 mt-1">10:45 AM</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                                </div>
                            </div>

                            {/* Input Box */}
                            <div className="border-t p-4">
                                <div className="flex items-center space-x-3">
                                    <input
                                        type="text"
                                        placeholder="Type a message..."
                                        className="flex-1 px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                    />
                                    <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    );
}
export default Wrapper(MessagesPage);