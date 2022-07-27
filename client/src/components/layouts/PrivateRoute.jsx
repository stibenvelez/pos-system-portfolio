import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import Navbar from "../ui/Navbar";
import Sidebar from "../ui/sidebar/SideBar";

const PrivateRoute = () => {
    const navigate = useNavigate();
    const auth = useSelector(({ auth }) => auth.auth);
    const loading = useSelector(({ auth }) => auth.loading);

    if (loading) {
        return (
            <div className="h-screen w-full flex justify-center items-center animate-pulse bg-gray-50">
                <img
                    src={`${import.meta.env.VITE_PUBLIC_URL}/img/app/logo.svg`}
                    className="fill-red-500 w-52"
                    alt="React Logo"
                />
            </div>
        );
    }

    if (!auth && !loading) {
        navigate("/");
    }

    return (
        <div className="flex w-full h-screen overflow-hidden bg-gray-50">
            <Sidebar />
            <div className="w-full h-full overflow-y-auto">
                <Navbar />
                <div className="p-4">
                   {auth? <Outlet />: <Navigate to="/"/>}
                </div>
            </div>
        </div>
    );
};

export default PrivateRoute;
