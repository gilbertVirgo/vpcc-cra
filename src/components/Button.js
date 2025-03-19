export default ({ children, href }) => (
	<a className="button__wrapper" href={href}>
		{children}
		<span style={{ display: "block" }}>→</span>
	</a>
);
