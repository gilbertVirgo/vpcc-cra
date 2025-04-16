// src/components/ModalContext.js
import React, { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalChildren, setModalChildren] = useState(false);

	const showModal = (children) => {
		setModalChildren(children);
		setIsModalOpen(true);
	};

	const hideModal = () => {
		setModalChildren(null);
		setIsModalOpen(false);
	};

	return (
		<ModalContext.Provider value={{ isModalOpen, showModal, hideModal }}>
			{children}
			{isModalOpen ? (
				<div
					className="modal__overlay sms-reminder-modal wrapper"
					onClick={hideModal}
				>
					<div
						className="modal__container container"
						onClick={(e) => e.stopPropagation()} // Stop event propagation
					>
						<div className="modal__close" onClick={hideModal}>
							&times;
						</div>

						{modalChildren}
					</div>
				</div>
			) : (
				""
			)}
		</ModalContext.Provider>
	);
};

export default ModalContext;
