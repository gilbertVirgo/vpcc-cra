import Button from "../../components/Button";

const ExhibitionInvite = () => {
	return (
		<div className="wrapper">
			<div className="max-w-2xl flex flex-col gap-8">
				<div className="flex flex-col gap-3 px-8">
					<h1>Local Art Exhibition</h1>
					<h3>
						Come along, support the artists, and enjoy an evening
						celebrating local creativity.
					</h3>
				</div>

				<img
					src="/assets/images/exhibition-invite-poster.jpg"
					alt="Local Art Exhibition Poster"
				/>

				<div className="px-8 flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<p>
							Over the past seven weeks, a group of local artists
							have been meeting together each Tuesday to learn new
							skills, create artwork, and enjoy creating together.
						</p>
						<p>
							To celebrate the end of the course, we&apos;re
							hosting a public exhibition showcasing the artwork
							produced throughout the programme.
						</p>
						<p>
							We&apos;d love for you to come along, support the
							artists, and enjoy an evening celebrating local
							creativity.
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-3 px-8" id="details">
					<h3>Event Details</h3>

					<ul className="flex flex-col gap-1 pl-6 list-disc">
						<li>
							<strong>Date:</strong> Friday 17 July
						</li>

						<li>
							<strong>Time:</strong> 7:00 PM
						</li>

						<li>
							<strong>Location:</strong> St Benet&apos;s
							Chaplaincy
						</li>
					</ul>
				</div>

				<div className="flex flex-col gap-3 ">
					<h3 className="px-8">Venue</h3>
					<p className="px-8">
						St Benet&apos;s Chaplaincy, <br />
						327A Mile End Rd, <br />
						Bethnal Green, <br />
						London E1 4NT
					</p>
					<div className="w-full" style={{ aspectRatio: "16 / 9" }}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.449433734096!2d-0.042210422203681056!3d51.523316071816915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d2f2110caf1%3A0xcd5c1cac416a4a23!2sSt%20Benet&#39;s%20Chaplaincy%20QMUL!5e0!3m2!1sen!2suk!4v1779185490795!5m2!1sen!2suk"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="St Benet's Chaplaincy map"
						></iframe>
					</div>
				</div>

				<div className="flex flex-col gap-3 px-8">
					<h3>What to Expect</h3>

					<ul className="flex flex-col gap-1 pl-6 list-disc">
						<li>
							A showcase of artwork created by local participants
						</li>
						<li>
							Artwork available to purchase (
							<strong>cash only</strong>)
						</li>
						<li>Snacks and drinks provided</li>
						<li>Free entry for all</li>
						<li>A chance to support and celebrate local artists</li>
					</ul>
				</div>

				<div className="flex flex-col gap-3 px-8" id="invite">
					<div className="flex flex-col gap-2">
						<p>
							Everyone is welcome. Come along, enjoy the
							exhibition, and celebrate the creativity of our
							local community.
						</p>
						<p>We hope to see you there.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExhibitionInvite;
