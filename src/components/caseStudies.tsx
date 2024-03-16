import TNW from '../assets/tnw.svg';
// import Google from '../assets/google.svg';
import Google from '../assets/Google+Logo+Gray.jpg';
import Nike from '../assets/Logo_NIKE.svg';
import Airbnb from '../assets/airbnb.svg';
import INF from '../assets/ITNews-Africa-600x400.png';

const SVGs = [
	{
		src: TNW,
		alt: 'TNW',
		className: 'w32 h32',
	},
	{
		src: Google,
		alt: 'Google',
		className: 'h-16 pt-6',
	},
	{
		src: Nike,
		alt: 'Nike',
		className: 'w32 h32',
	},
	{
		src: Airbnb,
		alt: 'Airbnb',
		className: 'w32 h32',
	},
	{
		src: INF,
		alt: 'INF',
		className: 'w-32 h32 filter grayscale',
	},
];

const CaseStudies = () => {
	return (
		<div
			className='bg-white text-[#9297a1] flex flex-col justify-between items-center py-24  pb-56 -mb-48 px-[15%] gap-10'
			id='caseStudies'
		>
			<h2 className='text-sm font-bold'>CLIENTS WE WORKED WITH</h2>
			<div className='flex gap-4 md:gap-24 flex-wrap justify-center items-center'>
				{
					SVGs.map((svg, index) => {
						return (
							<div key={index} className='w-32 h-32'>
								<img src={svg.src} alt={svg.alt} className={svg.className} />
							</div>
						);
					})
				}	
			</div>
		</div>
	);
};

export default CaseStudies;
