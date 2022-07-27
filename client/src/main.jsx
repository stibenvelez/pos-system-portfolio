import React from 'react'
import ReactDOM from 'react-dom/client'
import {store} from "./redux/store";
import { Provider } from "react-redux";
import "./index.css";
import App from './App';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

serviceWorkerRegistration.register({
    onUpdate: async (registration) => {
        if (registration && registration.waiting) {
            await registration.unregister();
            registration.waiting.postMessage({ type: "SKIP_WAITING" });
            window.location.reload();
        }
    },
});