import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
const Wrapper = (WrappedComponent: React.ComponentType) => {
    const Wrapper = (props: any) => {
        return      <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <div className="flex-1 bg-gray-50 p-6">
                <Header />
                <WrappedComponent {...props} />
            </div>
        </div>
    };

    return Wrapper;
};

export default Wrapper;