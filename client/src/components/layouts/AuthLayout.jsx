
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {

    const loading = useSelector(({ auth }) => auth.loading);
    const auth = useSelector(({ auth }) => auth.auth);

    if (loading) {
        return (
            <div className="h-screen w-full flex justify-center items-center animate-pulse bg-gray-50">
                <img
                    src={`${
                        import.meta.env.VITE_PUBLIC_URL
                    }/img/app/logo.svg`}
                    className="fill-red-500 w-52"
                    alt="React Logo"
                />
            </div>
        );
    }
    return <>{auth ? <Navigate to="/dashboard" /> : <Outlet />}</>;
};

export default AuthLayout;
