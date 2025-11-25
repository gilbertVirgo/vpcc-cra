import SMSReminderModal from "../../components/SMSReminderModal";

export default (showModal) => [
	{
		type: "feature",
		title: (
			<>
				December 7th: <span className="serif">Community Carols</span>
			</>
		),
		body: (
			<>
				<p>
					Join us outdoors for Christmas carols, followed by warm
					drinks, mince pies and time together.
				</p>
				<p>
					5–6pm • Canal Club Community Centre, Sewardstone Road, E2
					9HP
				</p>

				<p>Don’t forget to wrap up warm!</p>
			</>
		),

		images: [
			{
				src: "/assets/images/carols-25.jpg",
				alt: "Frisbee in the park",
			},
		],
		timeout: new Date("2025-12-07T18:00"),
	},
	{
		type: "feature",
		title: "Sundays",
		body: (
			<>
				<p>We are Victoria Park Community Church.</p>
				{/* <p>
					This week, we're meeting at Ben &amp; Rachel&rsquo;s home in
					Bethnal Green.
				</p>
				<p>
					Do get in touch and we&rsquo;d be delighted to share the
					address.
				</p> */}
				<p>
					We meet from 3:00pm-4:30pm at Victoria Park Baptist Church,
					186 Grove Road, London E3 5TG.
				</p>
			</>
		),
		buttons: [
			// { label: "Get in touch", href: "/connect" },
			{
				label: "Get directions",
				href: "https://maps.app.goo.gl/CQFsTYqZfuUAEvuP7",
				target: "_blank",
			},
			// {
			// 	label: "Send me a reminder text",
			// 	onClick: showModal(<SMSReminderModal/>),
			// },
		],
		images: [
			{
				src: "/assets/images/sundays-1_filtered.jpeg",
				alt: "A VPCC Sunday Service",
			},
			{
				src: "/assets/images/baby-1--filtered.jpg",
				alt: "A VPCC Sunday Service",
			},
			{
				src: "/assets/images/sundays-4_filtered.jpeg",
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
				src: "/assets/images/calendar.jpg",
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
		images: [
			{ src: "/assets/images/about_filtered.jpeg", alt: "The VPCC team" },
		],
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
		images: [
			{ src: "/assets/images/prayer-meeting_filtered.jpeg", alt: "" },
		],
	},
	{
		type: "feature",
		title: "Connect with us",
		body: (
			<p>
				Contact us via email at ben@vpcc.church or using{" "}
				<a
					href="https://www.facebook.com/people/Victoria-Park-Community-Church/100091737656153/"
					target="_blank"
				>
					Facebook
				</a>{" "}
				or{" "}
				<a href="https://instagram.com/vpcc.church" target="_blank">
					Instagram
				</a>
				.
			</p>
		),
		buttons: [{ label: "Send us an email", href: "/connect" }],
		images: [
			{
				src: "/assets/images/general--2.jpg",
				alt: "",
			},
		],
	},
];
