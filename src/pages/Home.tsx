import { useSearchParams } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import PerformanceLab from '../components/PerformanceLab'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ServiceDetail from './ServiceDetail'

const Home = () => {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('service');

  return (
    <>
      {serviceId ? (
        <ServiceDetail />
      ) : (
        <>
          <Hero />
          <About />
          <PerformanceLab />
          <Services />
          <Reviews />
        </>
      )}
      <Contact />
      <Footer />
    </>
  )
}

export default Home
