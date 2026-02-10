export default ({
	children,
	target,
	onClick = () => {},
	href,
	type,
	...props
}) =>
	href ? (
		<a
			className="button__wrapper"
			href={href}
			target={target}
			onClick={onClick}
			{...props}
		>
			{children}
			<span style={{ display: "block" }}>→</span>
		</a>
	) : (
		<button
			className="button__wrapper"
			type={type || "button"}
			onClick={onClick}
			{...props}
		>
			{children}
			<span style={{ display: "block" }}>→</span>
		</button>
	);
