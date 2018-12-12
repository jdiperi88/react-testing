import React from "react";
import PropTypes from "prop-types";
/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.Element} - Rendered component ( or null if `success`)
 */

const Congrats = props => {
	if (props.success) {
		return (
			<div data-test="component-congrats">
				<span data-test="congrats-message">Congrats you guessed right</span>
			</div>
		);
	} else {
		return <div data-test="component-congrats" />;
	}
};

Congrats.propTypes = {
	success: PropTypes.bool
};
export default Congrats;
