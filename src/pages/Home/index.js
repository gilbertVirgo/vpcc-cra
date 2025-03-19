import renderBlock from "../../helpers/renderBlock";
import blocks from "./blocks";

const Home = () => {
	return blocks.map(renderBlock);
};

export default Home;
