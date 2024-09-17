import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
const Wrapper = (WrappedComponent: React.ComponentType) => {
    const Wrapper = (props: any) => {
        return      <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <div className="h-screen flex-1 bg-[#F1FFFB] p-6">
                <Header />
                <WrappedComponent {...props} />
            </div>
        </div>
    };

    return Wrapper;
};

export default Wrapper;