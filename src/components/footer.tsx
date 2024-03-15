import {
	FacebookIcon,
	GlobeIcon,
	InstagramIcon,
	TwitterIcon,
} from 'lucide-react';

const FooterContent = [
	[
		{
			site: 'https:www.twitter.com',
			icon: <TwitterIcon fill='#9297a1' />,
			name: 'Twitter',
		},
		{ site: 'https:www.google.com', icon: <GlobeIcon />, name: 'Google' },
		{
			site: 'https:www.facebook.com',
			icon: <FacebookIcon />,
			name: 'Facebook',
		},
		{
			site: 'https:www.instagram.com',
			icon: <InstagramIcon />,
			name: 'Instagram',
		},
	],
	[
		{
			name: 'Home',
			path: '#home',
		},
		{
			name: 'Technology',
			path: '#technology',
		},
		{
			name: 'Services',
			path: '#services',
		},
		{
			name: 'About',
			path: '#about',
		},
	],
	[
		{
			name: 'Swiss Airlines',
			path: '#swissAirlines',
		},
		{
			name: 'Google',
			path: '#google',
		},
		{
			name: 'Apple',
			path: '#apple',
		},
		{
			name: 'Nike',
			path: '#nike',
		},
	],
	[
		{
			name: 'Jobs',
			path: '#jobs',
		},
		{
			name: 'Hire us',
			path: '#hireUs',
		},
	],
];

const Footer = () => {
	return (
		<div className='flex justify-center items-start p-6 md:p-12 text-white md:px-52 md:flex-row flex-col-reverse gap-6 md:gap-0'>
			<div>
				<div className='flex flex-col justify-start items-start space-y-5 gap-6 md:w-4/6'>
					<div className='flex flex-col justify-start items-start gap-6'>
						<h4 className='font-bold'>compleet labs</h4>
						<p className='text-[#9297a1] text-start w-8/12'>
							Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
							nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper
							nulla.
						</p>
					</div>
					<ul className='flex justify-between items-center space-x-5 text-[#9297a1] flex-row'>
						{FooterContent[0].map((link, index) => (
							<li key={index}>
								{'icon' in link && (
									<a
										href={link.site}
										target='_blank'
									>
										{link.icon}
									</a>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='flex justify-between items-start md:w-4/6 w-full'>
				<div className='flex flex-col justify-start items-start w-1/6 h-48 gap-4'>
					<h4 className='font-bold'>Sitemap</h4>
					<ul className='flex flex-col justify-start items-start text-[#9297a1] gap-3'>
						{FooterContent[1].map((link, index) => (
							<li key={index}>
								{'path' in link && <a href={link.path}>{link.name}</a>}
							</li>
						))}
					</ul>
				</div>
				<div className='flex flex-col justify-start items-start w-1/6 h-48 gap-4'>
					<h4 className='font-bold'>Case Studies</h4>
					<ul className='flex justify-between items-start text-[#9297a1] flex-col gap-3'>
						{FooterContent[2].map((link, index) => (
							<li key={index}>
								{'path' in link && <a href={link.path}>{link.name}</a>}
							</li>
						))}
					</ul>
				</div>
				<div className='flex flex-col justify-start items-start w-1/6 h-48 gap-4'>
					<h4 className='font-bold'>Contact</h4>
					<ul className='flex justify-between items-start text-[#9297a1] flex-col gap-3'>
						{FooterContent[3].map((link, index) => (
							<li key={index}>
								{'path' in link && <a href={link.path}>{link.name}</a>}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
