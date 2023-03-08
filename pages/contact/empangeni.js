import React from 'react';
import Head from 'next/head';
import ContactEmp from '../../components/ContactEmp';

function empangeni() {
	return (
		<div className='scroll-smooth bg-[#292929]'>
			<Head>
				<title>BBS TRUSS DIVISION - Empangeni Contact</title>
				<meta
					name='description'
					content='BBS Truss Division provides professional roofing design and construction to the KZN area'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/images/bbsIcon.png' />
			</Head>
			<ContactEmp />
		</div>
	);
}

export default empangeni;
