// import MatchForm from "../components/MatchForm";

// function HomePage() {
//   return (
//     <div>
//       <h1 style={{ textAlign: "center" }}>NeighborFit 🏘️</h1>
//       <MatchForm />
//     </div>
//   );
// }

// export default HomePage;

import HomeInfo from "../components/HomeInfo";
import MapSection from "../components/MapSection";
import LivabilityMetrics from "../components/LivabilityMetrics";
//import BestArea from "../components/BestArea";
import Footer from "../components/Footer";
function HomePage() {
  return (
    <div> 
         <HomeInfo />
         <MapSection />
         <LivabilityMetrics/>
         {/* <BestArea /> */}
         <Footer/>
         
      {/* <p style={{ textAlign: "center" }}>HomePage loaded successfully 🎉</p> */}
    </div>
  );
}

export default HomePage;

