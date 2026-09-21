import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import WhyUs from './sections/WhyUs';
import Cases from './sections/Cases';
import Process from './sections/Process';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return <><a className="skip-link" href="#content">К содержанию</a><Header /><main id="content"><Hero /><About /><Services /><WhyUs /><Cases /><Process /><Pricing /><FAQ /><Contact /></main><Footer /></>;
}
