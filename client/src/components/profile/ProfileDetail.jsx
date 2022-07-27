import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserByIdAction } from "../../redux/users/users.actions";
import Card from "../../shared/Card";

const ProfileDetail = () => {
    const { user } = useSelector(({ users }) => users);
    return (
        <div className="space-y-4">
            <Card>
                <div className="text-gray-700 flex">
                    <div className="">
                        <div className="bg-gray-200 rounded-md w-32 h-32"></div>
                    </div>
                    <div className="grid md:grid-cols-2 text-sm ">
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                                Primer nombre
                            </div>
                            <div className="px-4 py-2">{user.firstName}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                                Apellido
                            </div>
                            <div className="px-4 py-2">{user.lastName}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">email</div>
                            <div className="px-4 py-2">
                                <a
                                    className="text-blue-800"
                                    href="mailto:jane@example.com"
                                >
                                    {user.email}
                                </a>
                            </div>
                            <div className="px-4 py-2"></div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Rol</div>
                            <div className="px-4 py-2">{user.role}</div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ProfileDetail;
