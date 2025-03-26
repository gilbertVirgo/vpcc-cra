import React, { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => setIsModalOpen(true);
	const hideModal = () => setIsModalOpen(false);

	return (
		<ModalContext.Provider value={{ isModalOpen, showModal, hideModal }}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContext;
