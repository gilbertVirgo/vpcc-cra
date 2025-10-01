import { buildQueries } from "@testing-library/dom";
import SMSReminderModal from "../../components/SMSReminderModal";

export default (showModal) => [
	{
		type: "feature",
		title: (
			<>
				This Wednesday:{" "}
				<span className="serif">Frisbee in the Park</span>
			</>
		),
		body: (
			<>
				<p>
					Join us in <strong>Victoria Park</strong> from{" "}
					<strong>6pm</strong> for some casual frisbee, hanging out
					and a chance to meet some of the VPCC community.
				</p>
			</>
		),
		buttons: [
			{
				label: "Get directions",
				href: "https://maps.app.goo.gl/bbPLsXdSQeCKYkHY9",
				target: "_blank",
			},
		],
		images: [
			{
				src: "/assets/images/frisbee.jpg",
				alt: "Frisbee in the park",
			},
		],
		timeout: new Date("2025-09-24T18:00"),
	},
	// {
	// 	type: "feature",
	// 	title: (
	// 		<>
	// 			Reading Group: <span className="serif">The Reason for God</span>
	// 		</>
	// 	),
	// 	body: (
	// 		<>
	// 			<p>
	// 				Explore <em>The Reason for God</em> by Tim Keller in our
	// 				reading group — a space to to think deeply about the Bible,
	// 				science and apologetics.
	// 			</p>
	// 			<p>Come be with us this Monday from 7-8pm.</p>
	// 		</>
	// 	),
	// 	images: [
	// 		{
	// 			src: "/assets/images/the-reason-for-god.jpg",
	// 			alt: "The Reason for God",
	// 		},
	// 	],
	// 	buttons: [
	// 		{
	// 			label: "Get in touch",
	// 			href: "/connect",
	// 		},
	// 	],
	// },

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
				<p>
					This week, we&rsquo;re meeting at Ben &amp; Rachel&rsquo;s
					home in Bethnal Green.
				</p>
				<p>
					Do get in touch and we&rsquo;d be delighted to share the
					address.
				</p>
				{/* <p>
					We meet from 3:00pm-4:30pm at Victoria Park Baptist Church,
					186 Grove Road, London E3 5TG.
				</p> */}
			</>
		),
		buttons: [
			{ label: "Get in touch", href: "/connect" },
			// {
			// 	label: "Get directions",
			// 	href: "https://maps.app.goo.gl/CQFsTYqZfuUAEvuP7",
			// 	target: "_blank",
			// },
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
		title: <>Women’s breakfast</>,
		body: (
			<>
				<p>
					Join us for a morning of food, fellowship and fun at our
					monthly women’s breakfast.
				</p>
				<p>
					All women are welcome on 10am on the last Saturday of every
					month.
				</p>
			</>
		),
		images: [
			{
				src: "/assets/images/womens-breakfast--filtered.jpg",
				alt: "Women's breakfast",
			},
		],
		buttons: [
			{
				label: "Get in touch",
				href: "/connect",
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
				src: "/assets/images/hot-cross-buns_filtered.jpg",
				alt: "A VPCC Sunday Service",
			},
		],
	},
];
