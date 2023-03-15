import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import footerImg from '../public/images/bbsFooter.png';
import { ImWhatsapp } from 'react-icons/im';
import { BsFacebook } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { FiInstagram } from 'react-icons/fi';
import qrCode from '../public/images/qrLink.png';
import myLogo from '../public/images/myLogo.png';

function Footer() {
	return (
		<div className='w-full'>
			<div className='w-screen h-[30%] md:h-[50%] lg:h-screen relative'>
				<div className='absolute top-0 left-0 w-full h-[30vh] md:h-[50vh] lg:h-[100vh] z-10 bg-black'>
					<div className='absolute z-10 text-white font-ttHoves top-[10%] md:top-[25%] left-[50%] translate-x-[-50%] translate-y-[-25%]'>
						<h1 className='font-bold text-2xl md:text-5xl lg:text-[50pt] tracking-wider'>
							Let&apos;s Connect
						</h1>
					</div>

					<div className='text-[9px] md:text-2xl lg:text-[25pt] absolute z-10 font-semibold top-[40%] md:top-[50%] left-[25%] translate-x-[-50%] translate-y-[-25%]'>
						<p className='text-white'>43 Knutzen Street</p>
						<p className='text-white md:py-4'>Empangeni</p>
						<hr className='my-2 lg:my-6' />
						<p className='text-white'>10 Moffatt Drive</p>
						<p className='text-white md:py-4'>Ballito</p>
					</div>

					<div className='w-[35%] md:w-[40%] 2xl:w-fit text-[9px] md:text-2xl lg:text-[25pt] absolute z-10 font-semibold top-[40%] md:top-[50%] left-[65%] md:left-[75%] translate-x-[-50%] translate-y-[-25%]'>
						<p className='text-white'>Empangeni Tel: 035 787 1453</p>
						<p className='text-white py-1 md:py-4'>Ballito Tel: 032 946 2014</p>
						<p className='text-white'>Email: truss1@bbsgroup.co.za</p>
						<div className='flex items-left grid-cols-5 gap-4 m-auto pt-2 md:pt-4'>
							<a
								href={`https://wa.me/27764110493?text=${encodeURIComponent()}`}
								target='_blank'
								rel='noreferrer'
							>
								<div className='linkDots'>
									<ImWhatsapp />
								</div>
							</a>
							{/* <a href='/' target='_blank' rel='noreferrer'>
								<div className='linkDots'>
									<GrLinkedin />
								</div>
							</a> */}
							<a
								href='https://www.facebook.com/BBSTrussDivision'
								target='_blank'
								rel='noreferrer'
							>
								<div className='linkDots'>
									<BsFacebook />
								</div>
							</a>
							<a
								href='https://www.instagram.com/bbs_truss_division/'
								target='_blank'
								rel='noreferrer'
							>
								<div className='linkDots'>
									<FiInstagram />
								</div>
							</a>
							<Link href='mailto:truss1@bbsgroup.co.za'>
								<div className='linkDots'>
									<GrMail />
								</div>
							</Link>
						</div>
					</div>
					<div className='absolute z-[10] top-6 md:top-[80%] lg:top-[80%] left-[10%] md:left-[90%] translate-x-[-50%] translate-y-[-50%]'>
						<Link href='https://www.facebook.com/watch/?v=3108218539462337'>
							<div className='w-8 md:w-24'>
								<Image src={qrCode} alt='qr code' />
							</div>
						</Link>
					</div>
					<Image
						alt='Footer image'
						className='absolute z-1 object-cover opacity-[0.26]'
						fill
						src={footerImg}
					/>
				</div>
			</div>
			<div className='pt-[45%] md:pt-[65%] lg:-mt-[70%]'>
				<div className='absolute z-10 bg-[grey] h-[1px] w-[90%] left-[50%] translate-x-[-50%]'></div>
				<div className='pt-2 lg:pt-4'>
					<div className='absolute z-10 text-white left-[25%] md:left-[21%] lg:left-[15%] 2xl:left-[11.3%] translate-x-[-50%] hover:scale-110 cursor-pointer duration-300'>
						<Image src={myLogo} alt='logo' className='w-6 md:w-10' />
					</div>
					<div className='absolute z-10 text-white left-[12%] md:left-[11%] lg:left-[9%] 2xl:left-[7%] translate-x-[-50%]'>
						<p className='text-[#d6d6d6] text-xs md:text-base font-ttHoves'>
							Designed by
						</p>
					</div>
					<div className='absolute z-10 text-white left-[50%] md:translate-x-[-50%]'>
						<p className='text-[#d6d6d6] text-xs md:text-base font-ttHoves'>
							© BBS Mica Empangeni
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
