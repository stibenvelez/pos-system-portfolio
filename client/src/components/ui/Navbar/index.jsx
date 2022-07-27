import React from "react";
import { useSelector } from "react-redux";
import MenuProfile from "./MenuProfile";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between h-10 p-2 bg-gray-200 shadow">
            <div className="flex justify-end"></div>
            <div className="flex justify-end">
                <div className="flex items-center gap-3">
                    <MenuProfile/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
