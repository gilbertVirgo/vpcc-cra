export default ({ children, target, onClick = () => {}, href, type }) =>
	href ? (
		<a
			className="button__wrapper"
			href={href}
			target={target}
			onClick={onClick}
		>
			{children}
			<span style={{ display: "block" }}>→</span>
		</a>
	) : (
		<button
			className="button__wrapper"
			type={type || "button"}
			onClick={onClick}
		>
			{children}
			<span style={{ display: "block" }}>→</span>
		</button>
	);
