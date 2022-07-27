import React from "react";

const Badge = ({ type, children }) => {
    
    const STATECOLOR = {
        success: "bg-green-100 text-green-800",
        danger: "bg-red-100 text-red-800 ",
    };

    return (
        <span className={`${STATECOLOR[type]}  text-xs font-semibold mr-2 px-2.5 py-0.5 rounded `}>
            {children}
        </span>
    );
};

export default Badge;
