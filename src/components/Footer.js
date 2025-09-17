let sections = [
	{
		title: "Connect",
		links: [
			{
				icon: "/assets/icons/instagram.svg",
				label: "@vpcc.church",
				href: "https://www.instagram.com/vpcc.church",
			},
			{
				icon: "/assets/icons/facebook.svg",
				label: "Facebook",
				href: "https://www.facebook.com/p/Victoria-Park-Community-Church-100091737656153",
			},
			{
				label: "ben@vpcc.church",
				href: "mailto:ben@vpcc.church",
			},
		],
	},
	{
		title: "Legal",
		links: [
			{
				label: "Safeguarding Policy",
				href: "/assets/pdf/safeguarding-policy.pdf",
			},
			{
				label: "Complaint Policy",
				href: "/assets/pdf/complaint-policy.pdf",
			},
			{
				label: "Conflict of Interest Policy",
				href: "/assets/pdf/conflict-of-interest-policy.pdf",
			},
			{
				label: "Data Protection & Privacy Policy",
				href: "/assets/pdf/data-protection-privacy-policy.pdf",
			},
			{
				label: "Financial Management Policy",
				href: "/assets/pdf/financial-management-policy.pdf",
			},
			{
				label: "Governing Document",
				href: "/assets/pdf/governing-document.pdf",
			},
			{
				label: "Serious Incident Reporting Policy",
				href: "/assets/pdf/serious-incident-reporting-policy.pdf",
			},
		],
	},
	{
		title: "Associated Organisations",
		links: [
			{
				label: "FIEC",
				href: "https://fiec.org.uk",
			},
			{
				label: "Christian Heritage London",
				href: "https://christianheritagelondon.org",
			},
		],
	},
	/*{
		title: "Support us",
		links: [
			{
				label: "Donate via Stewardship",
				href: "https://stewardship.org",
			},
		],
	},*/
];

export default () => (
	<footer className="footer__wrapper wrapper">
		<div className="container layout--grid">
			{sections.map((section) => (
				<section className="footer__section__wrapper">
					<h3>{section.title}</h3>
					<ul className="footer__section__links">
						{section.links.map((link) => (
							<li className="footer__section__link">
								{!!link.icon ? (
									<img
										className="icon"
										src={link.icon}
										alt={`Icon: ${link.label}`}
									/>
								) : (
									""
								)}
								<a title={link.label} href={link.href}>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</section>
			))}
			<section className="footer__section__wrapper">
				<img
					src="/assets/images/affiliated-to-FIEC-logo-white.png"
					style={{ maxWidth: "192px" }}
				/>
			</section>
		</div>
	</footer>
);
