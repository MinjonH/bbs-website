import React from 'react';
import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

function Contact() {
	return (
		<div className='h-[175vh] max-w-screen'>
			{/* Left */}
			<div className='lg:ml-36 md:ml-[25%] h-screen'>
				<p className='font-semibold text-[20pt] font-ttHoves pt-48 text-[#ff7500]'>
					Contact Us
				</p>
				<h1 className='font-black text-white text-[40pt] font-ttHoves mt-2'>
					Get in touch
				</h1>
				<h1 className='font-black text-white text-[40pt] font-ttHoves -mt-4'>
					with our team
				</h1>
				{/* Call Button */}
				<div className='flex pt-12'>
					<div className='rounded-full border-solid border-[#FBC335] border-4 p-4 text-[#FBC335] ease-in duration-300'>
						<IoCallOutline size={35} />
					</div>
					<div>
						<p className='pl-8 font-openSans font-bold text-white pb-2 pt-2'>
							Call us
						</p>
						<p className='pl-8 font-openSans font-light text-white'>
							035 787 1453
						</p>
					</div>
				</div>

				{/* Location button */}
				<div className='flex pt-12'>
					<div className='rounded-full border-solid border-[#036fb4] border-4 p-4 text-[#036fb4] ease-in duration-300'>
						<GoLocation size={35} />
					</div>
					<div>
						<p className='pl-8 font-openSans font-bold text-white pb-2 pt-2'>
							Visit our office
						</p>
						<p className='pl-8 font-openSans font-light text-white'>
							43 Knutzen Street, Empangeni, 3880
						</p>
					</div>
				</div>

				{/* Mail button */}
				<div className='flex pt-12'>
					<div className='rounded-full border-solid border-[#ff7500] border-4 p-4 text-[#ff7500] ease-in duration-300'>
						<AiOutlineMail size={35} />
					</div>
					<div>
						<p className='pl-8 font-openSans font-bold text-white pb-2 pt-2'>
							Send us an email
						</p>
						<p className='pl-8 font-openSans font-light text-white'>
							truss1@bbsgroup.co.za
						</p>
					</div>
				</div>
			</div>

			{/* Right */}
			<div className='relative bg-[#036fb4] w-[364px] h-[564px] md:bottom-6 md:left-[40%] lg:-mt-[30%] lg:left-[63%]'></div>
			<div className='relative bg-white w-[476px] h-[559px] md:left-[20%] md:bottom-[35%] lg:-mt-[27%] lg:left-[55%] col-span-3'>
				<div className='p-8'>
					<form
						action='https://getform.io/f/6f97baae-2b73-4ba6-be77-2eba7de58ad1'
						method='POST'
						enctype='multipart/form-data'
					>
						<div className='grid md:grid-cols-2 gap-4 w-full'>
							<div className='flex flex-col'>
								<label className='uppercase text-sm font-openSans font-bold pb-2'>
									Name
								</label>
								<input
									className='border-[1px] p-3 flex border-gray-300'
									type='text'
									name='name'
								/>
							</div>
							<div className='flex flex-col'>
								<label className='uppercase text-sm font-openSans font-bold pb-2'>
									Email
								</label>
								<input
									className='border-[1px] p-3 flex border-gray-300'
									type='email'
									name='email'
								/>
							</div>
						</div>
						<div className='flex flex-col py-2'>
							<label className='uppercase text-sm font-openSans font-bold py-2'>
								Subject
							</label>
							<input
								className='border-[1px] p-3 flex border-gray-300'
								type='text'
								name='subject'
							/>
						</div>
						<div className='flex flex-col py-2'>
							<label className='uppercase text-sm font-openSans font-bold py-2'>
								Message
							</label>
							<textarea
								className='border-[1px] p-3 border-gray-300'
								rows='6'
								name='message'
							></textarea>
						</div>
						<button className='formButton'>Send Message</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
