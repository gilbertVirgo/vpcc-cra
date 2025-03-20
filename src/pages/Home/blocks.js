export default [
	{
		type: "feature",
		title: "Sundays",
		body: (
			<>
				<p>We are Victoria Park Community Church.</p>
				<p>
					We meet from 3:00pm-4:30pm at Victoria Park Baptist Church,
					186 Grove Road, London E3 5TG.
				</p>
			</>
		),
		buttons: [
			{
				label: "Get directions",
				href: "https://maps.google.com",
			},
			{
				label: "Send me a reminder text",
				href: "/sms-reminder",
			},
		],
		images: [
			{
				src: "/assets/images/sundays-1.jpeg",
				alt: "A VPCC Sunday Service",
			},
			{
				src: "/assets/images/sundays-2.jpeg",
				alt: "A VPCC Sunday Service",
			},
		],
	},
	{
		type: "feature",
		title: "What’s on?",
		body: (
			<p>
				We’re a community, not a once-a-week event. We prioritise time
				midweek to meet, eat together, pray and hang out.{" "}
			</p>
		),
		buttons: [{ label: "Find out what’s on", href: "/whats-on" }],
		images: [
			{
				src: "/assets/images/whatson.jpg",
				alt: "VPCC members enjoying lunch together",
			},
		],
	},
	{
		type: "feature",
		title: "About us",
		body: (
			<p>
				Victoria Park Community Church is led by Ben Virgo, who is
				supported by a growing team.
			</p>
		),
		buttons: [{ label: "Find out more", href: "/about" }],
		images: [{ src: "/assets/images/about.jpeg", alt: "The VPCC team" }],
	},
	{
		type: "feature",
		title: "What we believe",
		body: (
			<p>
				We submit to the UCCF Statement of Faith, and are affiliated
				with the Fellowship of Independent Evangelical Churches (FIEC).
			</p>
		),
		buttons: [{ label: "Find out more", href: "/beliefs" }],
		images: [{ src: "/assets/images/beliefs.jpg", alt: "" }],
	},
	{
		type: "feature",
		title: "Connect with us",
		body: (
			<p>
				Contact us via email at ben@vpcc.church or using Facebook or
				Instagram.
			</p>
		),
		buttons: [{ label: "Send us an email", href: "/connect" }],
		images: [
			{
				src: "/assets/images/connect.jpeg",
				alt: "",
			},
		],
	},
];
