import { SquareEqual } from 'lucide-react';
import { useState } from 'react';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const links = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Services',
		path: '#services',
	},
	{
		name: 'Technology',
		path: '#technology',
	},
	{
		name: 'Case studies',
		path: '#caseStudies',
	},
	{
		name: 'About',
		path: '#about',
	},
];

const NavBar = () => {
	const [activeLink, setActiveLink] = useState('/');

	const handleClick = (path: string) => {
		setActiveLink(path);
	};

	return (
		<>
			<div className='navbar flex justify-between items-center p-5 text-white md:px-52'>
				<div>
					<a href='/'>
						<h1 className='text-3sm'>compleet labs</h1>
					</a>
				</div>
				<nav className=' justify-between items-center hidden md:block'>
					<ul className='flex justify-between items-center space-x-6 text-[#9297a1]'>
						{links.map((link, index) => (
							<li key={index}>
								<a
									href={link.path}
									onClick={() => handleClick(link.path)}
									className={activeLink === link.path ? 'text-white' : ''}
								>
									{link.name}
								</a>
							</li>
						))}
						<li className='text-white flex justify-center items-center gap-2'>
							<SquareEqual className='w-4 h-4' />
							<p>Hire us</p>
						</li>
					</ul>
				</nav>
				<NavigationMenu className='md:hidden'>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Menu</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className='flex  text-[#9297a1] flex-col'>
									{links.map((link, index) => (
										<li
											key={index}
											className='text-white flex justify-start items-center p-2 whitespace-nowrap '
										>
											<a
												href={link.path}
												onClick={() => handleClick(link.path)}
												className={
													activeLink === link.path
														? 'text-white'
														: 'text-[#9297a1]'
												}
											>
												{link.name}
											</a>
										</li>
									))}
									<li className='text-white flex justify-start items-center p-2'>
										<SquareEqual className='w-4 h-4' />
										<p>Hire us</p>
									</li>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</>
	);
};

export default NavBar;
