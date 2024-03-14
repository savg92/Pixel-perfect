import TNW from '../assets/tnw.svg';
// import Google from '../assets/google.svg';
import Google from '../assets/Google+Logo+Gray.jpg';
import Nike from '../assets/Logo_NIKE.svg';
import Airbnb from '../assets/airbnb.svg';
import INF from '../assets/ITNews-Africa-600x400.png';

const CaseStudies = () => {
	return (
		<div
			className='bg-white text-[#9297a1] flex flex-col justify-between items-center p-24 pb-48 -mb-40 px-52'
			id='caseStudies'
		>
			<h2 className='text-sm font-bold'>CLIENTS WE WORKED WITH</h2>
			<div className='flex gap-28'>
				<img
					src={TNW}
					alt='TNW'
					className='w-28 h-28'
				/>
				<img
					src={Google}
					alt='Google'
					className='h-16 pt-6'
				/>
				<img
					src={Nike}
					alt='Nike'
					className='w-28 h-28'
				/>
				<img
					src={Airbnb}
					alt='Airbnb'
					className='w-28 h-28'
				/>
				<img
					src={INF}
					alt='INF'
					className='w-30 h-28 filter grayscale'
				/>
			</div>
		</div>
	);
};

export default CaseStudies;
