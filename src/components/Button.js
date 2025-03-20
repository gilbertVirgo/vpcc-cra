export default ({ children, href, type }) =>
	type === "submit" ? (
		<button className="button__wrapper" type="submit">
			{children}
			<span style={{ display: "block" }}>→</span>
		</button>
	) : (
		<a className="button__wrapper" href={href}>
			{children}
			<span style={{ display: "block" }}>→</span>
		</a>
	);
