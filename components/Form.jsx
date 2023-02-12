import React from 'react';

export const Form = () => {
	return (
		<form
			className='md:w-80'
			action='https://getform.io/f/6f97baae-2b73-4ba6-be77-2eba7de58ad1'
			method='POST'
			enctype='multipart/form-data'
		>
			<div className='flex flex-col'>
				<label className='uppercase md:text-sm font-openSans font-bold pb-2'>
					Email
				</label>
				<input
					className='border-[1px] p-3 flex border-gray-300'
					type='email'
					name='email'
				/>
			</div>
			<div className='flex flex-col md:py-2'>
				<label className='uppercase md:text-sm font-openSans font-bold py-2'>
					Subject
				</label>
				<input
					className='border-[1px] p-3 flex border-gray-300'
					type='text'
					name='subject'
				/>
			</div>
			<div className='flex flex-col md:py-2'>
				<label className='uppercase md:text-sm font-openSans font-bold py-2'>
					Message
				</label>
				<textarea
					className='border-[1px] md:p-3 border-gray-300'
					rows='6'
					name='message'
				></textarea>
			</div>
			<button className='formButton'>Send Message</button>
		</form>
	);
};
export default Form;
