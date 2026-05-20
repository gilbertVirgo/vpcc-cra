import Button from "../../components/Button";

const ArtCourse = () => {
	return (
		<div className="wrapper">
			<div className="max-w-2xl flex flex-col gap-8">
				<div className="flex flex-col gap-3 px-8">
					<h1>Introduction to Drawing & Painting</h1>
					<h3>
						Unlock your creative eye through drawing, painting,
						colour, and composition.
					</h3>
				</div>

				<img
					src="/assets/images/art-course-poster.jpg"
					alt="Drawing and Painting Course"
				/>

				<div className="px-8 flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<p>
							A relaxed 7-week course exploring observational
							drawing, painting, colour, composition, and creative
							expression.
						</p>
						<p>
							The course will be followed by an exhibition where
							course attendees can show off their work and
							celebrate their creative journey together.
						</p>
					</div>

					<div className="flex flex-col md:flex-row gap-3">
						<Button
							className="shrink"
							href="https://docs.google.com/forms/d/e/1FAIpQLSc-A8GdHP5dOP5BxbSJxcvNvV9QRkjTgZ_bZOet9Dp2RrZPog/viewform?usp=publish-editor"
						>
							Sign up
						</Button>
					</div>
				</div>

				<div className="flex flex-col gap-3 px-8" id="details">
					<h3>Details</h3>

					<ul className="flex flex-col gap-1 pl-6 list-disc">
						<li>
							<strong>Length:</strong> 7 weeks
						</li>

						<li>
							<strong>Cost:</strong> £7.50/week (£5 students)
						</li>

						<li>
							<strong>Included:</strong> Materials and meals
							provided each week
						</li>

						<li>
							<strong>Level:</strong> Beginners welcome
						</li>

						<li>
							<strong>Time:</strong> 6–9pm
						</li>

						<li>
							<strong>Venue:</strong> St Benet&apos;s Chaplaincy
						</li>
					</ul>
				</div>

				<div className="flex flex-col gap-3 ">
					<h3 className="px-8">Venue</h3>
					<p className="px-8">
						St Benet&apos;s Chaplaincy, <br />
						327A Mile End Rd, <br />
						Bethnal Green, <br />
						London E1 4NT
					</p>
					<div className="w-full" style={{ aspectRatio: "16 / 9" }}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.449433734096!2d-0.042210422203681056!3d51.523316071816915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d2f2110caf1%3A0xcd5c1cac416a4a23!2sSt%20Benet&#39;s%20Chaplaincy%20QMUL!5e0!3m2!1sen!2suk!4v1779185490795!5m2!1sen!2suk"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="St Benet's Chaplaincy map"
						></iframe>
					</div>
				</div>

				<div className="flex flex-col gap-3 px-8">
					<h3>What you&apos;ll explore</h3>

					<ul className="flex flex-col gap-1 pl-6 list-disc">
						<li>Observational drawing</li>
						<li>Perspective and proportion</li>
						<li>Light and shadow</li>
						<li>Colour and painting techniques</li>
						<li>Movement and mark-making</li>
						<li>Still life and portrait work</li>
					</ul>
				</div>

				<div className="flex flex-col gap-3 px-8" id="sign-up">
					<h3>Sign up</h3>

					<div className="flex flex-col gap-2">
						<p>
							<strong>Places are limited</strong>, so sign up soon
							if you&apos;d like to join us.
						</p>
						<p>
							Use our quick form to choose your payment option and
							complete your sign-up online.
						</p>
					</div>

					<Button
						className="shrink"
						href="https://docs.google.com/forms/d/e/1FAIpQLSc-A8GdHP5dOP5BxbSJxcvNvV9QRkjTgZ_bZOet9Dp2RrZPog/viewform?usp=publish-editor"
					>
						Go to sign-up form
					</Button>
				</div>

				<div className="flex flex-col gap-3 px-8">
					<p>
						No experience needed — just curiosity and a willingness
						to create.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ArtCourse;
