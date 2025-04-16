import fetch from "node-fetch";
import send from "gmail-send";

export async function handler(event) {
	try {
		const { token, formData } = JSON.parse(event.body);

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

		const recaptchaResult = await recaptchaResponse.json();

		if (!recaptchaResult.success) {
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

		return {
			statusCode: 200,
			body: JSON.stringify({ message: "Email sent successfully" }),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({
				error: "Internal Server Error",
				details: error.message,
			}),
		};
	}
}
