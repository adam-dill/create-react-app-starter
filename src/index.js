import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import App from "./App";
import { ApiProvider } from "./data/ApiContext";

ReactDOM.render(
    <React.StrictMode>
        <ApiProvider>
            <App />
        </ApiProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
