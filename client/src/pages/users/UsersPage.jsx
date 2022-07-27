import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Template from "../../components/ui/Template";
import UsersList from "../../components/users/UsersList";
import socket from "../../helpers/Socket";
import { getAllUsersAction } from "../../redux/users/users.actions";

const UsersPage = () => {
    const dispatch = useDispatch();
    const  [msg, setMsg] = useState("");

    useEffect(() => {
        dispatch(getAllUsersAction());
    }, []);
    
    return (
        <Template title="Usuarios" description="Lista de usuarios">
            <div className="max-w-2xl mx-auto">
                {msg.name}
                <UsersList />
            </div>
        </Template>
    );
};

export default UsersPage;
