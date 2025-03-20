import React from "react";
import Button from "../../components/Button";

const Connect = () => {
	return (
		<div className="connect__wrapper wrapper">
			<div className="connect__container container">
				<h1>Connect with us</h1>
				<div className="layout--grid">
					<form className="connect__form form">
						<div className="form__input-group">
							<section>
								<label>First name</label>
								<input type="text" />
							</section>
							<section>
								<label>Last name</label>
								<input type="text" />
							</section>
						</div>
						<section>
							<label>Email address</label>
							<input type="email" />
						</section>
						<section>
							<label>Message</label>
							<textarea></textarea>
						</section>
						<Button type="submit">Send</Button>
					</form>
					<img src="/assets/images/connect.jpeg" />
				</div>
			</div>
		</div>
	);
};

export default Connect;
