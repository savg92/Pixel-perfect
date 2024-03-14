import { SquareEqual } from 'lucide-react';
import { useState } from 'react';

const NavBar = () => {
	const [activeLink, setActiveLink] = useState('/');

	const handleClick = (path: string) => {
		setActiveLink(path);
	};

	return (
		<>
			<div className='navbar flex justify-between items-center p-5 text-white px-52'>
				<div>
					<h1 className='text-3sm'>compleet labs</h1>
				</div>
				<nav className='flex justify-between items-center space-x-5'>
					<ul className='flex justify-between items-center space-x-5 text-[#9297a1]'>
						<li>
							<a
								href='/'
								onClick={() => handleClick('/')}
								className={activeLink === '/' ? 'text-white' : ''}
							>
								Home
							</a>
						</li>
						<li>
							<a
								href='#services'
								onClick={() => handleClick('#services')}
								className={activeLink === '#services' ? 'text-white' : ''}
							>
								Services
							</a>
						</li>
						<li>
							<a
								href='#technology'
								onClick={() => handleClick('#technology')}
								className={activeLink === '#technology' ? 'text-white' : ''}
							>
								Technology
							</a>
						</li>
						<li>
							<a
								href='#caseStudies'
								onClick={() => handleClick('#caseStudies')}
								className={activeLink === '#caseStudies' ? 'text-white' : ''}
							>
								Case studies
							</a>
						</li>
						<li>
							<a
								href='#about'
								onClick={() => handleClick('#about')}
								className={activeLink === '#about' ? 'text-white' : ''}
							>
								About
							</a>
						</li>
						<li className='text-white flex justify-center items-center gap-2'>
							<SquareEqual className='w-4 h-4' />
							<p>Hire us</p>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default NavBar;
