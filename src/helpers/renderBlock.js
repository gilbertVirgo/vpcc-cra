import Button from "../components/Button";
import Slideshow from "../components/Slideshow";

export default (block) => {
	switch (block.type) {
		case "feature":
			return (
				<section className="feature__wrapper">
					{!!block.title ? (
						<h2 className="feature__title hide--sm-up">
							{block.title}
						</h2>
					) : (
						""
					)}

					{!!block.images && block.images.length > 0 ? (
						<div className="feature__image-slideshow">
							<Slideshow images={block.images} />
						</div>
					) : (
						""
					)}

					<section className="feature__text-content">
						{!!block.title ? (
							<h2 className="feature__title hide--sm-down">
								{block.title}
							</h2>
						) : (
							""
						)}
						{!!block.body ? (
							<div className="feature__body">{block.body}</div>
						) : (
							""
						)}
						{!!block.buttons && block.buttons.length > 0 ? (
							<div className="feature__button-group">
								{block.buttons.map((button) => (
									<Button href={button.href}>
										{button.label}
									</Button>
								))}
							</div>
						) : (
							""
						)}
					</section>
				</section>
			);
		default:
			return <p>No match for block type "{block.type}"</p>;
	}
};
