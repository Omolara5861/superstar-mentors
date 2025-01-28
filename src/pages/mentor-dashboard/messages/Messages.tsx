import Image from 'next/image';
import Wrapper from '../../../components/mentee-dashboard/wrapper/Wrapper';

function MessagesPage() {
    return (
        <main className="flex-1">
            <div className="flex h-full mt-5 gap-[38px]">
                {/* Conversation List */}
                <div className="w-1/3 border-[0.5px] border-[#c4c2c2] p-3 rounded-lg bg-white">
                    <div className="p-4 border-b">
                        <div className="flex justify-between">
                            <div className='flex gap-4 items-center'>
                                <p className="font-medium">Messages</p>
                                <div className='justify-center p-[10px] font-bold border-2 border-[#FFC145] text-[#FFC145] flex items-center w-[46px] h-8 rounded-2xl'>20</div>
                            </div>
                            <Image src='/dashboard/edit.svg' alt="Course" width={30} height={30} />
                        </div>
                        <div className='relative'>
                            <input
                                type="text"
                                placeholder="Search"
                                className="mt-2 w-full text-subtext placeholder:text-subtext pl-10 py-2 border border-[#868688] rounded-[4px]"
                            />
                            <Image src='/dashboard/search.svg' alt="Search" width={24} height={24} className='absolute top-4 left-2' />
                        </div>
                    </div>
                    <ul className="overflow-y-auto h-[calc(100%-64px)]">
                        {Array(10)
                            .fill(0)
                            .map((_, index) => (
                                <li
                                    key={index}
                                    className="flex items-center space-x-4 px-4 py-3 hover:bg-gray-100 cursor-pointer border-b-[0.5px] pt-5 border-[#D9D9D9] last:border-0"
                                >
                                    <div className="w-[50px] h-[50px] rounded-full bg-[#D9D9D9] relative"><Image src='/dashboard/online.svg' alt="Online" width={10} height={10} className='absolute right-1 bottom-[1px]' /></div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between">
                                            <p className="font-medium text-black">
                                                Mentor {index + 1}
                                            </p>
                                            <span className="text-sm text-black">20min ago</span>
                                        </div>
                                        <p className="text-sm text-black truncate">
                                            Hey Admin, kindly update my profile picture in order to reflect
                                        </p>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>

                {/* Active Chat Window */}
                <div className="flex-1 border-[0.5px] border-[#c4c2c2] p-6 rounded-lg">
                    <div className="flex items-center justify-between p-4 border-[0.5px] border-[#c4c2c2] rounded-[10px]">
                        <div className="flex items-center space-x-4">
                            <div className="w-[50px] h-[50px] rounded-full bg-[#D9D9D9]"></div>
                            <div className='flex gap-3 items-center'>
                                <p className="text-black font-medium">Deborah John</p>
                                <button className="border-2 border-primary text-primary font-bold flex items-center justify-center gap-2 h-8 rounded-2xl w-[110px]"><Image src='/dashboard/online.svg' alt="Online" width={10} height={10} /> Online</button>
                            </div>
                        </div>
                        <Image src='/dashboard/more.svg' alt="Three dots" width={3} height={18} />
                    </div>

                    {/* Chat Messages */}
                    <div className="flex flex-col justify-between h-[calc(100%-64px)]">
                        <div className="p-4 space-y-4 overflow-y-auto">
                            <p className="text-center text-sm text-subtext">Today</p>
                            <div className="flex flex-col items-end text-sm">
                                <div className="flex gap-28 text-subtext">
                                    <p className='font-medium'>Deborah John</p>
                                    <p className="">Friday 10:44am</p>
                                </div>
                                    <div className="bg-primary text-white p-[10px] rounded-[4px]">
                                        Hi Deborah, the session starts at 10:00 AM.
                                    </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-[50px] h-[50px] rounded-full bg-[#D9D9D9] relative"><Image src='/dashboard/online.svg' alt="Online" width={10} height={10} className='absolute right-1 bottom-[1px]' /></div>
                                <div className="flex flex-col items-start text-sm">
                                    <div className="flex gap-28 mb-2">
                                        <p className='font-medium text-black'>Eze Babatunde</p>
                                        <p className="text-subtext">Friday 10:44am</p>
                                    </div>
                                    <div className="bg-[#F5F5F5] text-black p-[10px] rounded-[4px]">
                                        Hi Deborah, the session starts at 10:00 AM.
                                    </div>
                                </div>
                           </div>
                            <div className="flex flex-col items-end text-sm">
                                <div className="flex gap-28 text-subtext">
                                    <p className='font-medium'>Deborah John</p>
                                    <p className="">Friday 10:44am</p>
                                </div>
                                    <div className="bg-primary text-white p-[10px] rounded-[4px]">
                                        Hi Deborah, the session starts at 10:00 AM.
                                    </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-[50px] h-[50px] rounded-full bg-[#D9D9D9] relative"><Image src='/dashboard/online.svg' alt="Online" width={10} height={10} className='absolute right-1 bottom-[1px]' /></div>
                                <div className="flex flex-col items-start text-sm">
                                    <div className="flex gap-28 mb-2">
                                        <p className='font-medium text-black'>Eze Babatunde</p>
                                        <p className="text-subtext">Friday 10:44am</p>
                                    </div>
                                    <div className="bg-[#F5F5F5] text-black p-[10px] rounded-[4px]">
                                        Hi Deborah, the session starts at 10:00 AM.
                                    </div>
                                </div>
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
                                <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-green-700">
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
