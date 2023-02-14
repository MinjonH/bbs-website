import React from 'react';

const ModalButton = ({ buttonRef, showModal }) => {
	return (
		<div ref={buttonRef} onClick={showModal}>
			<li className='blueButton text-md font-semibold'>Get a quote</li>
		</div>
	);
};
export default ModalButton;
