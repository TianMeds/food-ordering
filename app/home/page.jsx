
import Sisig from '../../public/G&R_Sisig_Slider.svg';
import Catering from '../../public/G&R_Catering.svg';
import HaloHalo from '../../public/G&R_HaloHalo.svg';
import LandingPage from '../_components/LandingPage';
import LandingHeader from '../_components/LandingHeader'
import Footer from '../_components/Footer';

const HomePage = () => {
  return (
    <div className="mt-20">
      <LandingHeader/>
      <LandingPage
        images={[
            { src: Sisig, alt: 'Image 1' },
            { src: Catering, alt: 'Image 2' },
            { src: HaloHalo, alt: 'Image 3' },
        ]}
      />
      <Footer/>
    </div>
  )
}

export default HomePage