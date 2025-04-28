import SMSReminderModal from "../../components/SMSReminderModal";

export default (showModal) => [
	{
		type: "feature",
		title: "Hot Cross Buns",
		body: (
			<>
				<p>
					Every year, a team of VPCC volunteers bake, ice and glaze
					over 200 hot cross buns for the enjoyment of the community.
					Why not join us for the festive feast on Good Friday?
				</p>
				<p>⸻</p>
				<p>17 Lark Row, E2 9JA</p>
				<p>11am-2pm • 18/04/25</p>
			</>
		),
		images: [
			{
				src: "/assets/images/hot-cross-buns_filtered.jpg",
				alt: "Hot cross buns",
			},
		],
		timeout: new Date("2025-04-18T15:00"),
	},
	{
		type: "feature",
		title: "Egg Hunt",
		body: (
			<>
				<p>
					Who doesn't love an egg hunt? On Easter Saturday, we&apos;ll
					be heading out to Victoria Park to find some hidden
					chocolate eggs. All parents and kids welcome!
				</p>
				<p>⸻</p>
				<p>2-3pm • 19/04/25</p>
			</>
		),
		images: [
			{
				src: "/assets/images/egg-hunt-map.svg",
				alt: "An egg hunt",
			},
		],
		imageEnlargeable: true,
		timeout: new Date("2025-04-19T15:00"),
	},
	{
		type: "feature",
		title: "Prayer meetings",
		body: (
			<>
				<p>
					London pastor C. H. Spurgeon once said “Prayer moves the arm
					that moves the world.”
				</p>
				<p>
					We meet together on Monday mornings and Friday evenings to
					pray for one another and for the people of London.{" "}
				</p>
			</>
		),
		images: [
			{
				src: "/assets/images/prayer-meeting_filtered.jpeg",
				alt: "A VPCC Prayer Meeting",
			},
		],
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
			},
			// {
			// 	label: "Send me a reminder text",
			// 	onClick: showModal(<SMSReminderModal/>),
			// },
		],
		images: [
			{
				src: "/assets/images/sundays-4_filtered.jpeg",
				alt: "A VPCC Sunday Service",
			},
		],
	},
	{
		type: "feature",
		title: "Cell groups",
		body: (
			<>
				<p>
					At our cell group meetings, we meet in smaller groups to
					eat, digest Sunday’s message, worship and pray.
				</p>
				<p>Interested? Why not drop us a line?</p>
			</>
		),
		buttons: [
			{
				label: "Get in touch",
				href: "/connect",
			},
		],
		images: [
			{
				src: "/assets/images/beliefs_filtered.JPG",
				alt: "A VPCC Sunday Service",
			},
		],
	},
	{
		type: "feature",
		title: "Life skills course",
		body: (
			<p>
				Living in London can be challenging. At our Life Skills
				meetings, our trained coaches offer local people help with
				essential skills with budgeting, cooking and more.
			</p>
		),
		buttons: [
			{
				label: "Get in touch",
				href: "/connect",
			},
		],
		images: [
			{
				src: "/assets/images/connect_filtered.jpeg",
				alt: "A VPCC Sunday Service",
			},
		],
	},
];
