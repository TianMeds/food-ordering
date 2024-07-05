import Image from "next/image";
import { Button } from "../components/ui/button"
import LandingHeader from '../app/_components/LandingHeader';
import LandingPage from '../app/_components/LandingPage';
import Sisig from '../public/G&R_Sisig_Slider.svg';
import Catering from '../public/G&R_Catering.svg';
import HaloHalo from '../public/G&R_HaloHalo.svg';



export default function Home() {
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
  );
}
