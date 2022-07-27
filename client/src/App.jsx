import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authAction } from "./redux/auth/auth.action";
import Routers from "./routes";
import "sweetalert2/dist/sweetalert2.min.css";
import "vite/modulepreload-polyfill";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authAction());
    }, []);

    return (
        <div>
            <Routers />
        </div>
    );
};

export default App;
