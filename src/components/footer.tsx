import {
	FacebookIcon,
	GlobeIcon,
	InstagramIcon,
	TwitterIcon,
} from 'lucide-react';

const Footer = () => {
	return (
		<div className='flex justify-center items-center space-x-5 p-12 text-white px-52'>
			<div className='flex flex-col justify-start items-start space-y-5 gap-6 w-4/6'>
				<div className='flex flex-col justify-start items-start gap-6'>
					<h4 className='font-bold'>compleet labs</h4>
					<p className='text-[#9297a1] text-justify w-1/2'>
						Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
						nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper
						nulla.
					</p>
				</div>
				<ul className='flex justify-between items-center space-x-5 text-[#9297a1] flex-row'>
					<li>
						<a
							href='https://www.twitter.com'
							target='_blank'
						>
							<TwitterIcon fill='#9297a1' />
						</a>
					</li>
					<li>
						<a
							href='#'
							target='_blank'
						>
							<GlobeIcon />
						</a>
					</li>
					<li>
						<a
							href='https://www.facebook.com'
							target='_blank'
						>
							<FacebookIcon />
						</a>
					</li>
					<li>
						<a
							href='https://www.instagram.com'
							target='_blank'
						>
							<InstagramIcon />
						</a>
					</li>
				</ul>
			</div>
			<div className='flex flex-col justify-start items-start w-1/6 h-60 gap-4'>
				<h4 className='font-bold'>Sitemap</h4>
				<ul className='flex flex-col justify-start items-start text-[#9297a1] gap-3'>
					<li>
						<a href='#home'>Home</a>
					</li>
					<li>
						<a href='#technology'>Technology</a>
					</li>
					<li>
						<a href='#services'>Services</a>
					</li>
					<li>
						<a href='#about'>About</a>
					</li>
				</ul>
			</div>
			<div className='flex flex-col justify-start items-start w-1/6 h-60 gap-4'>
				<h4 className='font-bold'>Case Studies</h4>
				<ul className='flex justify-between items-start text-[#9297a1] flex-col gap-3'>
					<li>
						<a href='#'>Swiss Airlines</a>
					</li>
					<li>
						<a href='#'>Google</a>
					</li>
					<li>
						<a href='#'>Apple</a>
					</li>
					<li>
						<a href='#'>Nike</a>
					</li>
				</ul>
			</div>
			<div className='flex flex-col justify-start items-start w-1/6 h-60 gap-4'>
				<h4 className='font-bold'>Contact</h4>
				<ul className='flex justify-between items-start text-[#9297a1] flex-col gap-3'>
					<li>
						<a href='#'>jobs</a>
					</li>
					<li>
						<a href='#'>Hire us</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
