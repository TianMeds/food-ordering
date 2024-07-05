
import Sisig from '../../public/G&R_Sisig_Slider.svg';
import Catering from '../../public/G&R_Catering.svg';
import HaloHalo from '../../public/G&R_HaloHalo.svg';
import LandingPage from '../_components/LandingPage';

const HomePage = () => {
  return (
    <div className="mt-20">
      <LandingPage
        images={[
            { src: Sisig, alt: 'Image 1' },
            { src: Catering, alt: 'Image 2' },
            { src: HaloHalo, alt: 'Image 3' },
        ]}
    />
    </div>
  )
}

export default HomePage