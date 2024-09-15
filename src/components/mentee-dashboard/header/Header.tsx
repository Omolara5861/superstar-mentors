import Image from "next/image";

const Header = () => {
    return (
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
            <div className="text-lg font-bold">Dashboard</div>
            <div className="flex items-center">
                <button className="mr-4">
                    <Image src="/dashboard/notification.svg" alt="Notifications" width={24} height={24}/>
                </button>
                <Image src="/dashboard/profile-pic.png" width={50} height={50} alt="Profile" className="rounded-full" />
            </div>
        </header>
    );
};

export default Header;
