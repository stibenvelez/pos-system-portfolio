import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import EgressDetail from "../../components/egresses/EgressDetail";
import Template from "../../components/ui/Template";
import { getEgressByIdAction } from "../../redux/egresses/egresses.action";

const EgressPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        (() => dispatch(getEgressByIdAction(id)))();
    }, []);

    return (
        <Template
            title="Detalle de Egreso"
            description={`este es el detallado del egreso`}
        >
            <div className="w-1/2 mx-auto">
                <div className="py-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-3 py-1 text-white transition duration-200 ease-in-out bg-gray-600 rounded hover:bg-gray-400"
                    >
                        Volver
                    </button>
                </div>
                <EgressDetail />
            </div>
        </Template>
    );
};

export default EgressPage;
