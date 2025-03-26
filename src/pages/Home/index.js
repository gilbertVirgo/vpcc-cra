import renderBlock from "../../utils/renderBlock";
import blocks from "./blocks";

import React, { useContext } from "react";
import ModalContext from "../../components/ModalContext";

const Home = () => {
	const { showModal } = useContext(ModalContext);

	return blocks(showModal).map(renderBlock);
};

export default Home;
