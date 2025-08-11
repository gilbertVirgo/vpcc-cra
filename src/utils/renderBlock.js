import Button from "../components/Button";
import Slideshow from "../components/Slideshow";

export default (block) => {
	// If current date is beyond block.timeout, return null.
	if (block.timeout && new Date() >= block.timeout) {
		return null;
	}

	switch (block.type) {
		case "feature":
			return (
				<section className="feature__wrapper layout--grid">
					{!!block.title ? (
						<h1 className="feature__title hide--sm-up">
							{block.title}
						</h1>
					) : (
						""
					)}

					{!!block.images && block.images.length > 0 ? (
						<div
							onClick={(e) => {
								if (!block.imageEnlargeable) return;

								e.target
									.closest(".feature__image-slideshow")
									.querySelector(".feature__image--enlarged")
									.classList.toggle("hidden");
							}}
							className={`feature__image-slideshow ${
								block.imageEnlargeable ? "enlargeable" : ""
							}`}
						>
							<Slideshow images={block.images} />
							{block.imageEnlargeable ? (
								<div className="feature__image--enlarged modal__overlay  hidden">
									<img src={block.images[0].src} />
								</div>
							) : (
								""
							)}
						</div>
					) : (
						""
					)}

					<section className="feature__text-content">
						{!!block.title ? (
							<h1 className="feature__title hide--sm-down">
								{block.title}
							</h1>
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
								{block.buttons.map((button, index) => (
									<Button
										key={`feature-button-${index}`}
										onClick={button.onClick}
										href={button.href}
										target={button.target}
									>
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
		case "header":
			return (
				<header className="header__wrapper wrapper">
					<div className="header__container container">
						{!!block.title ? <h1>{block.title}</h1> : ""}
						{!!block.body ? (
							<div className="header__body">{block.body}</div>
						) : (
							""
						)}
					</div>
				</header>
			);
		case "content-grid":
			return (
				<section className="content-grid__wrapper wrapper">
					<div className="content-grid__container container">
						{!!block.body || !!block.title ? (
							<div className="content-grid__text-body">
								<h1>{block.title}</h1>

								{block.body}
							</div>
						) : (
							""
						)}
						<div className="content-grid__cells layout--grid">
							{!!block.cells && block.cells.length > 0
								? block.cells.map((cell, index) => {
										return (
											<article
												className="content-grid__cell"
												key={`content-cell-${index}`}
											>
												{!!cell.title &&
													!!cell.subtitle && (
														<div className="content-grid__cell__title">
															{!!cell.title ? (
																<h3>
																	{cell.title}
																</h3>
															) : (
																""
															)}
															{!!cell.subtitle ? (
																<h4>
																	{
																		cell.subtitle
																	}
																</h4>
															) : (
																""
															)}
														</div>
													)}
												{!!cell.body ? cell.body : ""}
											</article>
										);
								  })
								: ""}
						</div>
					</div>
				</section>
			);
		default:
			return <p>No match for block type "{block.type}"</p>;
	}
};
