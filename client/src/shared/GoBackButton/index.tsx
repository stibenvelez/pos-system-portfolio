import React from "react";
import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate(-1)}
            className="bg-gray-500 py-1 px-2 rounded-md shadow-sm text-white hover:bg-gray-400 hover:cursor-pointer"
        >
            Volver
        </button>
    );
};

export default GoBackButton;
