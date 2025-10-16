import React from "react";
import Button from "./Button";

let links = [
	{ name: "Home", href: "/" },
	{ name: "What’s On", href: "/whats-on" },
	{ name: "About", href: "/about" },
	{ name: "Beliefs", href: "/beliefs" },
	{ name: "Connect", href: "/connect" },
];

let menuGlyph = {
	open: "/assets/glyphs/menu-open.svg",
	close: "/assets/glyphs/menu-close.svg",
};

export default () => {
	let [menuOpen, setMenuOpen] = React.useState(false);

	return (
		<nav
			className={`navigation-bar__wrapper wrapper ${
				menuOpen ? "open" : ""
			}`}
		>
			<div
				className="navigation-bar__container container"
				style={{ padding: 0 }}
			>
				<a className="navigation-bar__logo" href="/">
					<img src="/assets/glyphs/logo.svg" />
				</a>
				<div className="navigation-bar__spacer" />
				<div
					className={`navigation-bar__menu-toggle ]`}
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<img src={menuGlyph.close} className="menu-toggle--close" />
					<img src={menuGlyph.open} className="menu-toggle--open" />
				</div>
				<ul className="navigation-bar__links">
					{links.map((link) => (
						<li className="navigation-bar__link">
							<a
								key={`link-${link.name}`}
								title={link.name}
								href={link.href}
							>
								{link.name}
							</a>
						</li>
					))}
					<li>
						<Button style={{ columnGap: "1rem" }} href="/donate">
							Donate
						</Button>
					</li>
				</ul>
			</div>
		</nav>
	);
};
