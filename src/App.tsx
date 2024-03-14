// import { Layout } from 'lucide-react';
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Home from './components/home';
import Services from './components/services';
import Tecnologies from './components/tecnologies';
import CaseStudies from './components/caseStudies';
import About from './components/about';
// import NavBar from './components/Layout/NavBar';

const App = () => {
	return (
		<>
			<NavBar />
			<Home />
			<Services />
			<Tecnologies />
			<CaseStudies />
			<About />
			<Footer />
		</>
	);
};

export default App;
