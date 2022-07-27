import React, { useEffect, useState } from "react";
import ProfileDetail from "../../components/profile/ProfileDetail";
import Card from "../../shared/Card";
import Template from "../../shared/Template";
import SlideOver from "../../shared/SlideOver";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserByIdAction } from "../../redux/users/users.actions";
import FormUpdateUser from "../../components/users/FormUpdateUser";
import FormNewPassword from "../../components/users/FormNewPassword";
import GoBackButton from "../../shared/GoBackButton";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [OpenSlide, setOpenSlide] = useState(false);
    const [action, setAction] = useState("");

    useEffect(() => {
        dispatch(getUserByIdAction(id));
    }, []);

    const handleAction = (action) => {
        setAction(action);
        setOpenSlide(true);
    };

    const STATE_ACTION = {
        UPDATE: { title: "Actualizar usuario" },
        CHANGE_PASSWORD: { title: "Cambiar contraseña" },
    };

    const renderForm = () => {
        switch (action) {
            case "UPDATE":
                return <FormUpdateUser setOpenSlide={setOpenSlide} />;
            case "CHANGE_PASSWORD":
                return <FormNewPassword setOpenSlide={setOpenSlide} />;
            default:
                return false;
        }
    };
    return (
        <Template
            title="Mi cuenta"
            description="Aquí podra encontrar información de su cuenta"
        >
            <div className="space-y-4">
                <SlideOver
                    isOpen={OpenSlide}
                    setIsOpen={() => setOpenSlide(false)}
                    title={STATE_ACTION[action]?.title || ""}
                >
                    {renderForm()}
                </SlideOver>
                <Card>
                    <div className="flex gap-2">
                        <GoBackButton/>
                        <button
                            type="button"
                            onClick={() => handleAction("UPDATE")}
                            className="bg-slate-800 py-1 px-2 rounded-md text-white hover:bg-slate-700"
                        >
                            Actualizar mis datos
                        </button>
                        <button
                            onClick={() => handleAction("CHANGE_PASSWORD")}
                            className="bg-slate-800 py-1 px-2 rounded-md text-white hover:bg-slate-700"
                        >
                            Cambiar contraseña
                        </button>
                        {/* <button className="bg-slate-800 py-1 px-2 rounded-md text-white hover:bg-slate-700">
                            Olvidé mi contraseña
                        </button> */}
                    </div>
                </Card>
                <ProfileDetail />
            </div>
        </Template>
    );
};

export default ProfilePage;
