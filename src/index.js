import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./components/ModalContext";
import { ReCaptchaProvider } from "./components/ReCaptchaContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<ReCaptchaProvider siteKey="6Lfj0AErAAAAAB7JNpv769gtyadOHtYtG9RlXpJF">
			<ModalProvider>
				<App />
			</ModalProvider>
		</ReCaptchaProvider>
	</BrowserRouter>
);
