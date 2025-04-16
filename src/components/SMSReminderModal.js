// src/components/SMSReminderModal.js
import React, { useContext } from "react";
import Button from "./Button";
import ReCaptchaContext from "./ReCaptchaContext";

const SMSReminderModal = () => {
	const { executeRecaptcha } = useContext(ReCaptchaContext);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const token = await executeRecaptcha("sms_reminder_form");
		if (token) {
			console.log("ReCAPTCHA token:", token);
			// Proceed with form submission, including the token
			// You can send the token to your server for verification
		}
	};

	return (
		<>
			<div className="mini-container">
				<h3>Send me a reminder text message</h3>
				<p>
					With the hustle and bustle of London life, sometimes a nudge
					can be helpful. If you&apos;d like to be reminded about this
					week&apos;s Sunday service, put your number down, and we'll
					shoot you a reminder an hour before we start.
				</p>
			</div>

			<form className="form" method="POST" onSubmit={handleSubmit}>
				<div className="form__field">
					<label>Phone number</label>
					<input type="tel" name="phoneNumber" />
				</div>
				<Button type="submit">Send me a reminder this Sunday</Button>
			</form>
		</>
	);
};

export default SMSReminderModal;
