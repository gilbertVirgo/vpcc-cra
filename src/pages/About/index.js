import renderBlock from "../../utils/renderBlock";
import blocks from "./blocks";

const About = () => {
	return blocks.map(renderBlock);
};

// Probably needs an 'about page' class added to the body instead of this gap stuff

export default About;
