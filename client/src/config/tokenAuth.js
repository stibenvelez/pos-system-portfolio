import clienteAxios from "./axios";

const tokenAuth = () => {

    const token = localStorage.getItem("token");
    
    if (!token) {
        delete clienteAxios.defaults.headers.common["Authorization"];
        return;
    }

    clienteAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default tokenAuth;
