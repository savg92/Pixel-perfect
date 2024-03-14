import { FileText, MonitorSmartphone, PencilRuler } from 'lucide-react';
import Card from './cardServices';

const Services = () => {
	return (
		<div
			id='services'
			className=' px-52'
		>
			<div>
				<h1 className='text-3xl font-bold text-white p-5'>Our Services</h1>
				<p className='text-[#9297a1] p-5'>
					We feel very strong about our skills when it comes to planning,
					designing and coding applications. Here is what we love to do!
				</p>
			</div>
			<div className='flex justify-between items-center gap-8 p-5'>
				<Card
					icon={<FileText />}
					title='Business & Product Concept'
					description="Analyse business and product concepts at Start-up Workshops or Ongoing Projects' Audits and prepare a viable and sensible product roadmap for achieving a perfect market fit."
					link='#'
				/>
				<Card
					icon={<MonitorSmartphone />}
					title='Web & Mobile Development'
					description='Plan, develop and test high-quality web-applications using AngularJS, NodeJS, JavaScript, Typescript, HTML5 and SASS/CSS3 frameworks and native mobile languages.'
					link='#'
				/>
				<Card
					icon={<PencilRuler />}
					title='UX & Ul Design'
					description='Sketch intormation architecture andi simple mock-ups, convert them into clickable prototypes and finish with usable interface designs to deliver a good and rellable user experience.'
					link='#'
				/>
			</div>
		</div>
	);
};

export default Services;
