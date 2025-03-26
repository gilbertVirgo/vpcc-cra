import React from "react";

const FRAME_LENGTH = 1500;

export default ({ images }) => {
	let [currentImageIndex, setCurrentImageIndex] = React.useState(0);
	let [componentIsMounted, setComponentIsMounted] = React.useState(false); // eslint-disable-line no-unused-vars

	React.useEffect(() => {
		setComponentIsMounted(true);
		return () => {
			setComponentIsMounted(false);
		};
	}, []);

	React.useEffect(() => {
		if (componentIsMounted) {
			setTimeout(
				() =>
					setCurrentImageIndex(
						(currentImageIndex) =>
							(currentImageIndex + 1) % images.length
					),
				FRAME_LENGTH
			);
		}
	}, [componentIsMounted, currentImageIndex]);

	return images.map((image, index) => (
		<img
			style={{ display: currentImageIndex === index ? "block" : "none" }}
			key={`image-${index}`}
			alt={image.alt}
			src={image.src}
		/>
	));
};
