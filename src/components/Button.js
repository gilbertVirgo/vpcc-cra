export default ({
	children,
	target,
	onClick = () => {},
	href,
	type,
	className,
	...props
}) => {
	const handleAnchorClick = (e) => {
		if (href && href.startsWith("#")) {
			e.preventDefault();
			const element = document.getElementById(href.slice(1));
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
		onClick(e);
	};

	return href ? (
		<a
			className={`button__wrapper ${className}`}
			href={href}
			target={target}
			onClick={handleAnchorClick}
			{...props}
		>
			{children}
			<span style={{ display: "block" }}>→</span>
		</a>
	) : (
		<button
			className={`button__wrapper ${className}`}
			type={type || "button"}
			onClick={onClick}
			{...props}
		>
			{children}
			<span style={{ display: "block" }}>→</span>
		</button>
	);
};
