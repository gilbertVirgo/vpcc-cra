import fetch from "node-fetch";
import send from "gmail-send";

export async function handler(event) {
	try {
		console.log("Received event:", event);

		// Log the event body before parsing
		console.log("Event Body:", event.body);

		const { token, formData } = JSON.parse(event.body);
		console.log("Parsed token:", token);
		console.log("Parsed formData:", formData);

		// Verify reCAPTCHA token
		const recaptchaResponse = await fetch(
			`https://www.google.com/recaptcha/api/siteverify`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
			}
		);

		console.log("reCAPTCHA response status:", recaptchaResponse.status);

		const recaptchaResult = await recaptchaResponse.json();
		console.log("reCAPTCHA result:", recaptchaResult);

		if (!recaptchaResult.success) {
			console.log("reCAPTCHA verification failed");
			return {
				statusCode: 400,
				body: JSON.stringify({
					error: "reCAPTCHA verification failed",
				}),
			};
		}

		// Prepare email content
		const emailContent = `
      <h1>Contact Form Submission</h1>
      <p><strong>First Name:</strong> ${formData.firstName}</p>
      <p><strong>Last Name:</strong> ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
    `;
		console.log("Email content prepared");

		// Send email
		const sendEmail = send({
			user: process.env.GMAIL_USER,
			pass: process.env.GMAIL_PASS,
		});

		await sendEmail({
			to: "gil@vpcc.church",
			subject: "VPCC Contact Form Submission",
			html: emailContent,
			from: "noreply@vpcc.church",
		});

		console.log("Email sent successfully");

		return {
			statusCode: 200,
			body: JSON.stringify({ message: "Email sent successfully" }),
		};
	} catch (error) {
		console.error("Error occurred:", error.message);
		return {
			statusCode: 500,
			body: JSON.stringify({
				error: "Internal Server Error",
				details: error.message,
			}),
		};
	}
}
