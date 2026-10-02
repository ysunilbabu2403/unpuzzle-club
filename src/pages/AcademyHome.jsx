// import AcademyNavbar from "../components/academy/AcademyNavbar";
import AcademyHero from "../components/academy/AcademyHero";
import Gallery from "../components/academy/Gallery";
import Approach from "../components/academy/Approach";
 import Programs from "../components/academy/Programs";
 import Locations from "../components/academy/Locations";
//import AcademyFooter from "../components/academy/AcademyFooter";

import "../styles/academy.css";

function AcademyHome() {
  return (
    <div className="academy-page">

      <main>
        {/* Hero / Home */}
        <AcademyHero />

        {/* Gallery + Reviews */}

       

        {/* Our Approach + Who Would Join Us */}
        <Approach />

        {/* Programs */}
        <Programs />

        {/* Locations */}
        <Locations />

        <Gallery />
      </main>

      {/* Contact Footer */}
      {/* <AcademyFooter /> */}

    </div>
  );
}

export default AcademyHome;