import Button from "../../components/Button";

export default [
	{
		type: "custom",
		body: (
			<div className="wrapper">
				<div className="max-w-2xl flex flex-col gap-6">
					<div className="flex flex-col gap-4 px-8">
						<h1>ESOL</h1>
						<h3>Join us for a friendly, relaxed English course.</h3>
					</div>
					<img
						src="/assets/images/esol-poster--rachel.jpg"
						alt="ESOL"
					/>

					<p className="px-8">
						This course is run by Rachel, who has been leading it
						for 4 years and has welcomed over 50 people through the
						programme.
					</p>

					<ul className="flex flex-col gap-1 pr-8 pl-14 list-disc">
						<li>
							<strong>When:</strong> Every Friday, 11am–2pm
						</li>
						<li>
							<strong>Taster session:</strong> Friday 17th April
						</li>
						<li>
							<strong>Length:</strong> 8 weeks (with a break for
							Easter)
						</li>
						<li>
							<strong>Cost:</strong> Free
						</li>
					</ul>

					<div className="flex flex-col gap-4 px-8">
						<h3>What to expect:</h3>
						<ul className="flex flex-col gap-1 pl-6 list-disc">
							<li>Conversation practice</li>
							<li>Cooking together</li>
							<li>Stories and discussion</li>
							<li>Simple homework</li>
						</ul>
					</div>

					<div className="flex flex-col gap-4 px-8">
						<p>
							<strong>Places are limited</strong>, so please sign
							up soon.
						</p>

						<div className="flex flex-col md:flex-row gap-4">
							<Button href="tel:+447906875505">
								Call Rachel
							</Button>
							<Button href="/connect">Contact us</Button>
						</div>

						<p>Everyone is welcome — we’d love to meet you!</p>
					</div>
				</div>
			</div>
		),
	},
];
