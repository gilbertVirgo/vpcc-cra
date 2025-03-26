import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./components/ModalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<ModalProvider>
			<App />
		</ModalProvider>
	</BrowserRouter>
);
