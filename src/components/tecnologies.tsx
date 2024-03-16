import HTML from '../assets/html5-2.svg';
import CSS from '../assets/css3-1.svg';
import SASS from '../assets/sass.svg';
import Angular from '../assets/angularjs.svg';
import Python from '../assets/python.svg';
import Node from '../assets/nodejs.svg';

const SVGs = [
	{
		src: HTML,
		alt: 'HTML5',
	},
	{
		src: CSS,
		alt: 'CSS3',
	},
	{
		src: SASS,
		alt: 'SASS',
	},
	{
		src: Node,
		alt: 'Node',
	},
	{
		src: Angular,
		alt: 'Angular',
	},
	{
		src: Python,
		alt: 'Python',
	},
];

const Tecnologies = () => {
	return (
		<div
			className='bg-[#3871ff] text-white flex md:flex-row justify-center md:justify-between items-center p-5 -mt-24 pt-44 pb-32 px-[15%] flex-col gap-10 md:gap-0'
			id='technology'
		>
			<div className=' w-3/5'>
				<h1 className='text-3xl font-bold text-start'>
					We use cutting edge technology
				</h1>
				<p className='text-[#9bb8ff] text-start mt-5 w-[28rem]'>
					Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia
					bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis
					dis parturient montes, nascetur ridiculus mus. Nulla vitae elit
					libero, a pharetra augue. Vestibulum id ligula porta felis euismod
					semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
					auctor.
				</p>
			</div>
			<div className='flex flex-wrap w-72 gap-10 pr-12'>
				{
					SVGs.map((svg, index) => {
						return (
							<div key={index} className='w-16 h-16'>
								<img src={svg.src} alt={svg.alt} />
							</div>
						);
					})
				}
			</div>
		</div>
	);
};

export default Tecnologies;
