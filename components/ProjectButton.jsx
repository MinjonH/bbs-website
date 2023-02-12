import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const links = [
	{ href: '/projects/lgsteel', label: 'Light Guage Steel Projects' },
	{ href: '/projects/timber', label: 'Timber Projects' },
	{ href: '/projects/laminatedbeams', label: 'Laminated Beam Projects' },
];

export default function ProjectButton() {
	return (
		<div>
			<Menu as='div' className='relative block text-left'>
				<div>
					<Menu.Button className='uppercase hover:border-b hover:border-gray-400'>
						Projects
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter='transition ease-out duration-500'
					enterFrom='transform opacity-0 scale-95'
					enterTo='transform opacity-100 scale-100'
					leave='transition ease-in duration-400'
					leaveFrom='transform opacity-100 scale-100'
					leaveTo='transform opacity-0 scale-95'
				>
					<Menu.Items className='absolute left-1 mt-4 w-64 origin-top-right divide-y divide-gray-200 bg-white text-black focus:outline-none px-4 py-2'>
						{links.map((link) => (
							<Menu.Item
								as='a'
								key={link.href}
								href={link.href}
								className='group flex w-full items-center rounded-md p-4'
							>
								{link.label}
							</Menu.Item>
						))}
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}
