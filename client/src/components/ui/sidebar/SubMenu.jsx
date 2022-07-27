import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

const SubMenu = ({ item, showSidebar }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <NavLink
                className={`flex items-center justify-between p-5 text-base text-white cursor-pointer hover:bg-rose-700 hover:border-l-4 hover:pl-4`}
                to={item.path}
                onClick={item.subNav && showSubnav}
               
            >
                <div className="flex gap-4 items-center">
                    <i className="text-white">{item.icon}</i>
                    <span className="">{item.title}</span>
                </div>
                <div>
                    {item.subNav && subnav ? (
                        <ChevronUpIcon
                            className="-mr-1 ml-2 h-5 w-5"
                            aria-hidden="true"
                        />
                    ) : item.subNav ? (
                        <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5"
                            aria-hidden="true"
                        />
                    ) : null}
                </div>
            </NavLink>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <Link
                            className="flex items-center p-5 pl-5 text-white bg-slate-900 hover:bg-slate-600"
                            to={item.path}
                            key={index}
                            onClick={() => showSidebar()}
                        >
                            {item.icon} <span>{item.title}</span>
                        </Link>
                    );
                })}
        </>
    );
};

export default SubMenu;
