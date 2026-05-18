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

				<div className="px-8 flex flex-col gap-3">
					<p>
						A relaxed 7-week course exploring observational drawing,
						painting, colour, composition, and creative expression.
					</p>

					<div className="flex flex-col md:flex-row gap-3">
						<Button href="/art-course/signup">Sign up</Button>
						<Button href="#details">Course details</Button>
					</div>
				</div>

				<div className="flex flex-col gap-3 px-8" id="details">
					<h3>Details</h3>

					<ul className="flex flex-col gap-1 pl-6 list-disc">
						<li>
							<strong>Length:</strong> 7 weeks
						</li>

						<li>
							<strong>Cost:</strong> £10/week (£5 students)
						</li>

						<li>
							<strong>Included:</strong> Meals provided each week
						</li>

						<li>
							<strong>Level:</strong> Beginners welcome
						</li>
					</ul>
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

					<Button href="/art-course/signup">
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
