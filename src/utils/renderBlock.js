import React, { useEffect, useRef } from "react";
import Button from "../components/Button";
import Slideshow from "../components/Slideshow";

const FeatureBlock = ({ block }) => {
	const wrapperRef = useRef(null);
	const imgRef = useRef(null);
	const textRef = useRef(null);

	useEffect(() => {
		if (!wrapperRef.current && !imgRef.current && !textRef.current) return;

		// Respect user preference for reduced motion
		const reduced =
			window.matchMedia &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (reduced) {
			if (wrapperRef.current) wrapperRef.current.classList.add("fade-in");
			if (textRef.current) {
				Array.from(textRef.current.children).forEach((child) => {
					child.style.transitionDelay = "0ms";
					if (child.firstElementChild)
						child.firstElementChild.style.transitionDelay = "0ms";
				});
				textRef.current.classList.add("fade-in");
			}
			return;
		}

		const wrappers = document.querySelectorAll(".feature__wrapper");
		const wrapper =
			wrapperRef.current ||
			(imgRef.current
				? imgRef.current.closest(".feature__wrapper")
				: null);
		const i = wrapper ? Array.from(wrappers).indexOf(wrapper) : 0;
		const betweenFeatures = 300; // ms between feature groups
		const gap = 180; // ms between image and text
		const base = i * betweenFeatures;
		const timeouts = [];

		// Fade the wrapper, then the image, then the text content
		if (wrapperRef.current) {
			timeouts.push(
				setTimeout(
					() => wrapperRef.current.classList.add("fade-in"),
					base
				)
			);
		}

		if (imgRef.current) {
			timeouts.push(
				setTimeout(
					() => imgRef.current.classList.add("fade-in"),
					base + 20
				)
			);
		}

		if (textRef.current) {
			timeouts.push(
				setTimeout(() => {
					const children = Array.from(textRef.current.children);
					const childDelta = 80; // ms stagger between children
					children.forEach((child, idx) => {
						const delay = `${idx * childDelta}ms`;
						child.style.transitionDelay = delay;
						if (child.firstElementChild)
							child.firstElementChild.style.transitionDelay =
								delay;
					});
					textRef.current.classList.add("fade-in");
				}, base + gap)
			);
		}

		return () => {
			timeouts.forEach(clearTimeout);
			if (textRef.current) {
				Array.from(textRef.current.children).forEach((child) => {
					child.style.transitionDelay = "";
					if (child.firstElementChild)
						child.firstElementChild.style.transitionDelay = "";
				});
				textRef.current.classList.remove("fade-in");
			}
			if (imgRef.current) imgRef.current.classList.remove("fade-in");
			if (wrapperRef.current)
				wrapperRef.current.classList.remove("fade-in");
		};
	}, []);

	return (
		<section ref={wrapperRef} className="feature__wrapper layout--grid">
			{!!block.title ? (
				<h1 className="feature__title hide--sm-up">{block.title}</h1>
			) : (
				""
			)}

			{!!block.images && block.images.length > 0 ? (
				<div
					ref={imgRef}
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

			<section ref={textRef} className="feature__text-content">
				{!!block.title ? (
					<div className="feature__text-item">
						<h1 className="feature__title hide--sm-down">
							{block.title}
						</h1>
					</div>
				) : (
					""
				)}
				{!!block.body ? (
					<div className="feature__text-item">
						<div className="feature__body">{block.body}</div>
					</div>
				) : (
					""
				)}
				{!!block.buttons && block.buttons.length > 0 ? (
					<div className="feature__text-item">
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
					</div>
				) : (
					""
				)}
			</section>
		</section>
	);
};

const HeaderBlock = ({ block }) => {
	const wrapperRef = useRef(null);
	const innerRef = useRef(null);

	useEffect(() => {
		if (!wrapperRef.current && !innerRef.current) return;

		const reduced =
			window.matchMedia &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (reduced) {
			if (wrapperRef.current) wrapperRef.current.classList.add("fade-in");
			if (innerRef.current) {
				Array.from(innerRef.current.children).forEach((child) => {
					child.style.transitionDelay = "0ms";
					if (child.firstElementChild)
						child.firstElementChild.style.transitionDelay = "0ms";
				});
				innerRef.current.classList.add("fade-in");
			}
			return;
		}

		const wrappers = document.querySelectorAll(
			".feature__wrapper, .header__wrapper, .content-grid__wrapper"
		);
		const wrapper = wrapperRef.current;
		const i = wrapper ? Array.from(wrappers).indexOf(wrapper) : 0;
		const betweenFeatures = 300;
		const gap = 180;
		const base = i * betweenFeatures;
		const timeouts = [];

		// always schedule wrapper fade so header is visible even if indexing fails
		if (wrapperRef.current) {
			timeouts.push(
				setTimeout(() => {
					if (wrapperRef.current)
						wrapperRef.current.classList.add("fade-in");
					if (!innerRef.current) return;
				}, base)
			);
		}

		if (innerRef.current) {
			timeouts.push(
				setTimeout(() => {
					const children = Array.from(innerRef.current.children);
					const childDelta = 80;
					children.forEach((child, idx) => {
						const delay = `${idx * childDelta}ms`;
						child.style.transitionDelay = delay;
						if (child.firstElementChild)
							child.firstElementChild.style.transitionDelay =
								delay;
					});
					innerRef.current.classList.add("fade-in");
					if (
						wrapperRef.current &&
						!wrapperRef.current.classList.contains("fade-in")
					) {
						wrapperRef.current.classList.add("fade-in");
					}
				}, base + gap)
			);
		}

		return () => {
			timeouts.forEach(clearTimeout);
			if (innerRef.current) {
				Array.from(innerRef.current.children).forEach((child) => {
					child.style.transitionDelay = "";
					if (child.firstElementChild)
						child.firstElementChild.style.transitionDelay = "";
				});
				innerRef.current.classList.remove("fade-in");
			}
			if (wrapperRef.current)
				wrapperRef.current.classList.remove("fade-in");
		};
	}, []);

	return (
		<header ref={wrapperRef} className="header__wrapper wrapper">
			<div className="container layout--grid">
				<div ref={innerRef} className="grid--central group--vt-md">
					{!!block.title ? (
						<div className="feature__text-item">
							<h1>{block.title}</h1>
						</div>
					) : (
						""
					)}
					{!!block.body ? (
						<div className="feature__text-item">
							<div className="header__body">{block.body}</div>
						</div>
					) : (
						""
					)}
				</div>
			</div>
		</header>
	);
};

const ContentGridBlock = ({ block }) => {
	const wrapperRef = useRef(null);
	const cellsRef = useRef(null);

	useEffect(() => {
		if (!wrapperRef.current && !cellsRef.current) return;

		const reduced =
			window.matchMedia &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (reduced) {
			if (wrapperRef.current) wrapperRef.current.classList.add("fade-in");
			if (cellsRef.current) {
				Array.from(cellsRef.current.children).forEach((child) => {
					child.style.transitionDelay = "0ms";
					if (child.firstElementChild)
						child.firstElementChild.style.transitionDelay = "0ms";
				});
				cellsRef.current.classList.add("fade-in");
			}
			return;
		}

		const wrappers = document.querySelectorAll(
			".feature__wrapper, .header__wrapper, .content-grid__wrapper"
		);
		const wrapper = wrapperRef.current;
		const i = wrapper ? Array.from(wrappers).indexOf(wrapper) : 0;
		const betweenFeatures = 300;
		const gap = 180;
		const base = i * betweenFeatures;
		const timeouts = [];

		if (wrapperRef.current) {
			timeouts.push(
				setTimeout(
					() => wrapperRef.current.classList.add("fade-in"),
					base
				)
			);
		}

		if (cellsRef.current) {
			timeouts.push(
				setTimeout(() => {
					const children = Array.from(cellsRef.current.children);
					const childDelta = 80;
					children.forEach((child, idx) => {
						const delay = `${idx * childDelta}ms`;
						child.style.transitionDelay = delay;
						if (child.firstElementChild)
							child.firstElementChild.style.transitionDelay =
								delay;
					});
					cellsRef.current.classList.add("fade-in");
				}, base + gap)
			);
		}

		return () => {
			timeouts.forEach(clearTimeout);
			if (cellsRef.current) {
				Array.from(cellsRef.current.children).forEach((child) => {
					child.style.transitionDelay = "";
					if (child.firstElementChild)
						child.firstElementChild.style.transitionDelay = "";
				});
				cellsRef.current.classList.remove("fade-in");
			}
			if (wrapperRef.current)
				wrapperRef.current.classList.remove("fade-in");
		};
	}, []);

	return (
		<section ref={wrapperRef} className="content-grid__wrapper wrapper">
			<div className="content-grid__container container">
				{!!block.body || !!block.title ? (
					<div className="grid--central group--vt-md">
						<h1>{block.title}</h1>

						{block.body}
					</div>
				) : (
					""
				)}
				<div
					ref={cellsRef}
					className="content-grid__cells layout--grid"
				>
					{!!block.cells && block.cells.length > 0
						? block.cells.map((cell, index) => {
								return (
									<article
										className="content-grid__cell"
										key={`content-cell-${index}`}
									>
										{!!cell.title && !!cell.subtitle && (
											<div className="content-grid__cell__title">
												{!!cell.title ? (
													<h3>{cell.title}</h3>
												) : (
													""
												)}
												{!!cell.subtitle ? (
													<h4>{cell.subtitle}</h4>
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
};

export default (block) => {
	// If current date is beyond block.timeout, return null.
	if (block.timeout && new Date() >= block.timeout) {
		return null;
	}

	switch (block.type) {
		case "feature":
			return <FeatureBlock block={block} />;

		case "header":
			return <HeaderBlock block={block} />;

		case "content-grid":
			return <ContentGridBlock block={block} />;
		default:
			return <p>No match for block type "{block.type}"</p>;
	}
};
