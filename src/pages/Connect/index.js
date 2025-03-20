import React, { useState } from "react";
import Button from "../../components/Button";

const Connect = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Form submission logic here
		console.log("Form submitted:", formData);
	};

	return (
		<main className="connect__wrapper wrapper">
			<div className="connect__container container">
				<h1 id="connect-heading">Connect with us</h1>
				<div className="layout--grid">
					<form
						className="connect__form form"
						onSubmit={handleSubmit}
						aria-labelledby="connect-heading"
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
									aria-required="true"
									aria-labelledby="firstName-label"
									aria-describedby="firstName-error"
									required
								/>
								<div
									id="firstName-error"
									className="error-message"
									aria-live="polite"
								></div>
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
									aria-required="true"
									aria-labelledby="lastName-label"
									aria-describedby="lastName-error"
									required
								/>
								<div
									id="lastName-error"
									className="error-message"
									aria-live="polite"
								></div>
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
								aria-required="true"
								aria-labelledby="email-label"
								aria-describedby="email-error"
								required
							/>
							<div
								id="email-error"
								className="error-message"
								aria-live="polite"
							></div>
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
								aria-required="true"
								aria-labelledby="message-label"
								aria-describedby="message-error"
								required
							></textarea>
							<div
								id="message-error"
								className="error-message"
								aria-live="polite"
							></div>
						</div>
						<Button type="submit" aria-label="Send message">
							Send
						</Button>
					</form>
					<img
						src="/assets/images/connect.jpeg"
						alt="People connecting at a community event"
						aria-hidden="false"
					/>
				</div>
			</div>
		</main>
	);
};

export default Connect;
