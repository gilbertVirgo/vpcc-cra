import Button from "../../components/Button";

export default [
	{
		type: "custom",
		body: (
			<div className="wrapper">
				<div className="max-w-2xl flex flex-col gap-8">
					<div className="flex flex-col gap-3 px-8">
						<h1>ESOL</h1>
						<h3>Join us for a friendly, relaxed English course.</h3>
					</div>
					<img
						src="/assets/images/esol-poster--rachel.jpg"
						alt="ESOL"
					/>

					<div className="px-8 flex flex-col gap-3">
						<p>
							This is a brand new course run by Rachel, a
							qualified teacher who has lived in East London for
							nearly three decades and has led a number of similar
							courses in the in recent years.
						</p>

						<div className="flex flex-col md:flex-row gap-3">
							<Button href="#sign-up">Sign up</Button>
							<Button href="#location">Get directions</Button>
						</div>
					</div>

					<div className="flex flex-col gap-3 px-8">
						<h3>Details</h3>
						<ul className="flex flex-col gap-1 pl-6 list-disc">
							<li>
								<strong>When:</strong> Fridays from 11am to 2pm
							</li>
							<li className="mb-2">
								<strong>Where:</strong> 17 Lark Row, London, E2
								9JA
							</li>
							<li>
								<strong>Course start date:</strong> Friday 17th
								April
							</li>

							<li>
								<strong>Length:</strong> 8 weeks
							</li>
							<li>
								<strong>Cost:</strong> Free
							</li>
						</ul>
					</div>

					<div className="flex flex-col gap-3 px-8">
						<h3>What to expect</h3>
						<ul className="flex flex-col gap-1 pl-6 list-disc">
							<li>Conversation practice</li>
							<li>Cooking together</li>
							<li>Stories and discussion</li>
							<li>Simple homework</li>
						</ul>
					</div>

					<div className="flex flex-col gap-3 px-8" id="sign-up">
						<h3>Sign up</h3>
						<div className="flex flex-col gap-2 ">
							<p>
								<strong>Places are limited</strong>, so please
								sign up soon.
							</p>

							<p>
								If you would like to join us, text 'ESOL' with
								your name to{" "}
								<a href="sms:+447906875505">07906 875505</a>.
							</p>
						</div>
						<div className="flex flex-col gap-3 ">
							<p>
								Alternatively, you can contact us via phone or
								email:
							</p>

							<div className="flex flex-col md:flex-row gap-3">
								<Button href="tel:+447906875505">
									Call Rachel
								</Button>
								<Button href="/connect">
									Contact us via email
								</Button>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-3" id="location">
						<div className="px-8 flex flex-col gap-2">
							<h3>Location</h3>
							<p>
								We&apos;ll be meeting at 17 Lark Row, London, E2
								9JA
							</p>
						</div>
						<div className="aspect-video relative">
							<iframe
								className="w-full h-full"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.8402407293265!2d-0.05340160000000001!3d51.53449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cdddcf71831%3A0x3c75b2803ac80843!2s17%20Lark%20Row%2C%20London%20E2%209JA!5e0!3m2!1sen!2suk!4v1776087301501!5m2!1sen!2suk"
							/>
						</div>
					</div>

					<div className="flex flex-col gap-3 px-8">
						<p>Everyone is welcome — we’d love to meet you!</p>
					</div>
				</div>
			</div>
		),
	},
];
