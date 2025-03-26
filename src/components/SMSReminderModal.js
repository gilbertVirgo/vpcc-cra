import React, { useContext } from "react";
import ModalContext from "./ModalContext";
import Button from "./Button";

const SMSReminderModal = () => {
	const { isModalOpen, hideModal } = useContext(ModalContext);

	if (!isModalOpen) return null;

	return (
		<div className="modal__overlay wrapper" onClick={hideModal}>
			<div
				className="modal__container container"
				onClick={(e) => e.stopPropagation()} // Stop event propagation
			>
				<div className="modal__close" onClick={hideModal}>
					&times;
				</div>

				<div className="mini-container">
					<h3>Send me a reminder text message</h3>
					<p>
						With the hustle and bustle of London life, sometimes a
						nudge can be helpful. If you&apos;d like to be reminded
						about this week&apos;s Sunday service, put your number
						down, and we'll shoot you a reminder an hour before we
						start.
					</p>
				</div>

				<form className="form">
					<div className="form__field">
						<label>Phone number</label>
						<input type="tel" name="phone_number" />
					</div>
					<Button type="submit">
						Send me a reminder this Sunday
					</Button>
				</form>
			</div>
		</div>
	);
};

export default SMSReminderModal;
