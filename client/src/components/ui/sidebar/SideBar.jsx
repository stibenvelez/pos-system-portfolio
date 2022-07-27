import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData ";
import SubMenu from "./SubMenu";


import { useState } from "react";

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="z-50 ">
            <div
                className="absolute flex items-center justify-center w-12 h-12 rounded-md bg-slate-800 hover:bg-slate-700 top-3 button-3 left-3  sm:hidden shadow-sm"
                onClick={showSidebar}
            >
                <Link className="text-white" to="#">
                    <FaIcons.FaBars />
                </Link>
            </div>
            <nav
                className={`bg-slate-800 h-screen sm:w-56 w-full overflow-y-auto flex justify-center transition-all duration-300 sm:relative sm:left-0 fixed ease-in-out ${
                    sidebar ? "left-0" : "-left-full "
                }`}
            >
                <div className="w-full ">
                    <div className="flex justify-center w-full py-4">
                        <Link to="/" className="text-2xl font-bold text-white">
                            <div className="w-28 md:w-40">
                                <img
                                    src={`${
                                        import.meta.env.VITE_PUBLIC_URL
                                    }/img/app/logo-white.svg`}
                                    className="fill-red-500"
                                    alt="React Logo"
                                />
                            </div>
                        </Link>
                    </div>
                    <Link
                        className="absolute items-center justify-end text-xl font-bold text-white right-2 top-3 sm:hidden"
                        to="#"
                    >
                        <AiIcons.AiOutlineClose onClick={showSidebar} />
                    </Link>
                    {SidebarData.map((item, index) => {
                        return (
                            <SubMenu
                                item={item}
                                key={index}
                                showSidebar={showSidebar}
                            />
                        );
                    })}
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
