import blocks from "./blocks";
import renderBlock from "../../helpers/renderBlock";

const Beliefs = () => {
	return blocks.map(renderBlock);
};

export default Beliefs;
