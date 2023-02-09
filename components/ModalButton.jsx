import React from 'react';

const ModalButton = ({ triggerText, buttonRef, showModal }) => {
	return (
		<button ref={buttonRef} onClick={showModal}>
			<li className='blueButton text-md font-semibold'>Get a quote</li>
		</button>
	);
};
export default ModalButton;
