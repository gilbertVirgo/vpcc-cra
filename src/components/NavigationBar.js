const links = [
	{ name: "Home", href: "/home" },
	{ name: "Beliefs", href: "/beliefs" },
	{ name: "Whats’ On", href: "/whats-on" },
	{ name: "Connect", href: "/connect" },
];

export default () => {
	return (
		<nav className="navigation-bar__wrapper">
			<div className="navigation-bar__container container">
				<img src="/assets/logo.svg" className="navigation-bar__logo" />
				<section className="navigation-bar__links">
					{links.map((link) => (
						<a
							className="navigation-bar__link"
							key={`link-${link.name}`}
							title={link.name}
							href={link.href}
						>
							{link.name}
						</a>
					))}
				</section>
			</div>
		</nav>
	);
};
