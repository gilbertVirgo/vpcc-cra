import SMSReminderModal from "../../components/SMSReminderModal";

export default (showModal) => [
	{
		type: "feature",
		title: (
			<>
				This Summer: <span className="serif">Community Games</span>
			</>
		),
		body: (
			<>
				<p>
					Join us this Wednesday from 6:30-8pm for fun, games and
					snacks on the Wellington estate.
				</p>
			</>
		),
		buttons: [
			{
				label: "Get directions",
				href: "https://maps.app.goo.gl/BCFDzM1KamRXjLUWA",
				target: "_blank",
			},
		],
		images: [
			{
				src: "/assets/images/community-games.jpg",
				alt: "Community games",
			},
		],
		timeout: new Date("2025-08-27T20:00"),
	},
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
				src: "/assets/images/general--2.jpg",
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
				src: "/assets/images/connect_filtered.jpeg",
				alt: "",
			},
		],
	},
];
