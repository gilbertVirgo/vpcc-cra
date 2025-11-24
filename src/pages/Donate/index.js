import React, { useContext, useState } from "react";
import Button from "../../components/Button";
import ReCaptchaContext from "../../components/ReCaptchaContext";

import { useNavigate } from "react-router-dom";

import ModalContext from "../../components/ModalContext";

let SuccessModal = () => (
	<div className="mini-container">
		<h3>Success</h3>
		<p>
			Thank you for getting in touch. We&rsquo;ll get back to you as soon
			as possible.
		</p>
	</div>
);

let ErrorModal = () => (
	<div className="mini-container">
		<h3>Error</h3>
		<p>
			It looks like something&rsquo;s gone wrong and your message
			hasn&rsquo;t been sent.
		</p>
		<p>
			Please try again later or contact us directly on{" "}
			<a href="mailto:gil@vpcc.church">gil@vpcc.church</a>.
		</p>
	</div>
);

export default () => {
	let navigate = useNavigate();
	const { showModal } = useContext(ModalContext);

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({});

	const { executeRecaptcha } = useContext(ReCaptchaContext);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));

		// Clear field-specific error while typing
		setErrors((prev) => ({ ...prev, [name]: undefined }));
	};

	const isValidEmail = (value) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
	};

	const validate = () => {
		const newErrors = {};
		if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
		if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
		if (!formData.email.trim()) newErrors.email = "Email is required.";
		else if (!isValidEmail(formData.email)) newErrors.email = "Enter a valid email address.";
		if (!formData.message.trim()) newErrors.message = "Message is required.";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validate()) return;
		const token = await executeRecaptcha("contact_form");
		if (token) {
			try {
				const response = await fetch(
					"/.netlify/functions/submitDonateForm",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ token, formData }),
					}
				);

				const result = await response.json();
				if (response.ok) {
					console.log("Email sent successfully:", result);
					showModal(<SuccessModal />);
				} else {
					showModal(<ErrorModal />);
				}
			} catch (error) {
				console.error(error);
				showModal(<ErrorModal />);
			}
			navigate("/");
		}
	};

	// Seriously thinking this and the connect page would be better off without the image, just centred fields between 4 / -4 or something.

	return (
		<main className="donate__wrapper wrapper">
			<div className="donate__container container layout--grid">
				<header className="donate__header group--vt-md">
					<h1>Donate</h1>
					<div className="group--vt-sm">
						<p>
							Thank you for your interest in supporting Victoria
							Park Community Church.
						</p>
						<p>
							Please share your contact details below, and we’ll
							be in touch soon to discuss the best way for you to
							make your donation.
						</p>
					</div>
				</header>

				<form
					method="POST"
					className="donate__form form"
					onSubmit={handleSubmit}
					aria-labelledby="donate-heading"
					noValidate
				>
					<div className="form__input-group">
						<div className="form__field">
							<label htmlFor="firstName" id="firstName-label">
								First name
							</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
								aria-invalid={errors.firstName ? "true" : "false"}
								aria-required="true"
								aria-labelledby="firstName-label"
								aria-describedby="firstName-error"
								required
							/>
							<div
								id="firstName-error"
								className="error-message"
								aria-live="polite"
							>
								{errors.firstName}
							</div>
						</div>
						<div className="form__field">
							<label htmlFor="lastName" id="lastName-label">
								Last name
							</label>
							<input
								type="text"
								id="lastName"
								name="lastName"
								value={formData.lastName}
								onChange={handleChange}
								aria-invalid={errors.lastName ? "true" : "false"}
								aria-required="true"
								aria-labelledby="lastName-label"
								aria-describedby="lastName-error"
								required
							/>
							<div
								id="lastName-error"
								className="error-message"
								aria-live="polite"
							>
								{errors.lastName}
							</div>
						</div>
					</div>
					<div className="form__field">
						<label htmlFor="email" id="email-label">
							Email address
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							aria-invalid={errors.email ? "true" : "false"}
							aria-required="true"
							aria-labelledby="email-label"
							aria-describedby="email-error"
							required
						/>
						<div
							id="email-error"
							className="error-message"
							aria-live="polite"
						>
							{errors.email}
						</div>
					</div>
					<div className="form__field">
						<label htmlFor="message" id="message-label">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							aria-invalid={errors.message ? "true" : "false"}
							aria-required="true"
							aria-labelledby="message-label"
							aria-describedby="message-error"
							required
						></textarea>
						<div
							id="message-error"
							className="error-message"
							aria-live="polite"
						>
							{errors.message}
						</div>
					</div>
					<Button type="submit" aria-label="Send message">
						Send
					</Button>
					<p className="subtext">
						This site is protected by reCAPTCHA and the Google{" "}
						<a href="https://policies.google.com/privacy">
							Privacy Policy
						</a>{" "}
						and{" "}
						<a href="https://policies.google.com/terms">
							Terms of Service
						</a>{" "}
						apply.
					</p>
				</form>
			</div>
		</main>
	);
};
