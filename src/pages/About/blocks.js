export default [
	{
		type: "header",
		title: (
			<>
				Our story <span className="serif">(in brief)</span>
			</>
		),
		body: (
			<>
				<p>
					Victoria Park Community Church began in 2011, when friends
					and family gathered in Pastor Ben’s living room with a
					shared vision: to enjoy and share the hope of the gospel in
					Tower Hamlets — a diverse area where few know Christ.
				</p>

				{/* <p>
					From the start, prayer shaped our life together, and God
					answered: a neighbour overcame depression, a lonely student
					found belonging, and others discovered genuine friendship.
				</p> */}

				{/* <p>
					As we grew, the local Tenants and Residents Association
					offered us their community centre just when we needed more
					space.
				</p> */}

				<p>
					Now we meet at Victoria Park Baptist Church, welcoming
					people from near and far, united by the gospel, building
					deep relationships, and reaching out with love to our wider
					community. We are blessed to be a blessing.
				</p>
			</>
		),
	},
	{
		type: "content-grid",
		title: "Our team",
		cells: [
			{
				title: "Ben",
				subtitle: "Lead Pastor",
				body: (
					<p>
						Ben is married to Rachel and they have had seven
						children together, four of whom live with them at their
						council estate home in Bethnal Green. Ben also serves as
						a director at{" "}
						<a href="https://christianheritagelondon.org">
							Christian Heritage London
						</a>
						.{" "}
					</p>
				),
			},
			{
				title: "Gil",
				subtitle: "Pastor",
				body: (
					<p>
						Gil is married to Lucy. They live together with their
						two daughters in Bow. Gil is currently studying Theology
						at{" "}
						<a href="https://www.ust.ac.uk">
							Union School of Theology
						</a>
						.
					</p>
				),
			},
			// {
			// 	title: "Isaiah Jagdeo",
			// 	subtitle: "Church Manager",
			// 	body: (
			// 		<p>
			// 			Isaiah is married to Beth. They live together in
			// 			Stratford. Isaiah works as a Mission Associate for
			// 			Children, Youth & Schools at{" "}
			// 			<a href="https://www.lcm.org.uk">London City Mission</a>
			// 			.
			// 		</p>
			// 	),
			// },
			// {
			// 	title: "Beth Jagdeo",
			// 	subtitle: "Lead Kids Worker",
			// 	body: (
			// 		<p>
			// 			Beth is married to Isaiah. During the week, she works
			// 			with a medical charity.
			// 		</p>
			// 	),
			// },
			{
				title: "Rachel",
				subtitle: "Life Skills Coach",
				body: (
					<p>
						Rachel is married to Ben. Besides her role as a mother,
						she serves the local community as a{" "}
						<a href="https://capuk.org">CAP Life Skills</a> coach.
					</p>
				),
			},
		],
	},
];
