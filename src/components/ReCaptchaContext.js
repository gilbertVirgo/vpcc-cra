// src/components/ReCaptchaContext.js
import React, { createContext, useState, useEffect } from "react";
import { load } from "recaptcha-v3";

const ReCaptchaContext = createContext();

export const ReCaptchaProvider = ({ children, siteKey }) => {
	const [recaptcha, setRecaptcha] = useState(null);

	useEffect(() => {
		// Load the ReCAPTCHA when the component mounts
		load(siteKey).then(setRecaptcha);
	}, [siteKey]);

	const executeRecaptcha = async (action) => {
		if (!recaptcha) {
			console.error("ReCAPTCHA not loaded");
			return null;
		}
		try {
			const token = await recaptcha.execute(action);
			return token;
		} catch (error) {
			console.error("ReCAPTCHA execution error:", error);
			return null;
		}
	};

	return (
		<ReCaptchaContext.Provider value={{ executeRecaptcha }}>
			{children}
		</ReCaptchaContext.Provider>
	);
};

export default ReCaptchaContext;
