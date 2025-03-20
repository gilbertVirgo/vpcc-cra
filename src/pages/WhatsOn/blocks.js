export default [
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
				src: "/assets/images/sundays-2.jpeg",
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
				src: "/assets/images/whatson.jpg",
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
				label: "Apply for Life Skills training",
			},
		],
		images: [
			{
				src: "/assets/images/connect.jpeg",
				alt: "A VPCC Sunday Service",
			},
		],
	},
];
