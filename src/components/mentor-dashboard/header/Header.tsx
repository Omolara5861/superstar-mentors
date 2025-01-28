import Image from "next/image";

const Header = () => {
    return (
        <header>
            <div className="py-1 px-6 flex justify-between items-center">
                <div>
                    <h4 className="text-xl flex font-medium text[#1B1E1F]">Good day, Mentor! <Image src="/dashboard/wave.svg" alt="Notifications" width={24} height={24} /></h4>
                    <p className="text-subtext text-xs"> Everyday makes you closer to your success</p>
                </div>
                <div className="flex items-center">
                    <button className="mr-1">
                        <Image src="/dashboard/notification.svg" alt="Notifications" width={24} height={24} />
                    </button>
                    <button className="mr-4">
                        <Image src="/dashboard/message1.svg" alt="Notifications" width={24} height={24} />
                    </button>
                    <div className="p-[10px] rounded-lg flex w-[126px]">
                        <Image src="/dashboard/profile-pic.png" width={50} height={50} alt="Profile" className="rounded-full mr-[14px]" />
                        <Image src="/dashboard/caret-down.svg" width={12} height={12} alt="Arrow Down" />
                    </div>
                </div>
           </div>
            <div className="bg-primary h-[0.5px] w-full"></div>
        </header>
    );
};

export default Header;
