import { useParams } from "react-router-dom";
import areaRatings from "../data/areaRatings";
import LivabilityBreakdown from "../components/LivabilityBreakdown";
import areaImages from "../data/areaImages";


function AreaDetailPage() {
  const { areaName } = useParams();
  const areaData = areaRatings[decodeURIComponent(areaName)];

  if (!areaData) {
    return <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Area not found!</h2>;
  }

  // map area data into metrics array for the Breakdown component
  const metrics = [
    { name: "Amenities", score: areaData.Amenities, icon: "🏙️" },
    { name: "Commute", score: areaData.Commute, icon: "🚌" },
    { name: "Cost of Living", score: areaData.Cost, icon: "💰" },
    { name: "Crime", score: areaData.Crime, icon: "⚖️" },
    { name: "Employment", score: areaData.Employment, icon: "💼" },
    { name: "Health", score: areaData.Health, icon: "❤️" },
    { name: "Housing", score: areaData.Housing, icon: "🏠" },
    { name: "Schools", score: areaData.Schools, icon: "🎓" }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <LivabilityBreakdown metrics={metrics} areaName={areaName} />
      </div>
      <div style={styles.rightSection}>
        <img
          src={`/images/areas/${areaName}.jpg`}
          alt={areaName}
          style={styles.image}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: "2.5rem 1rem",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "'Poppins', sans-serif",
  },
  leftSection: {
    flex: "1 1 46%",
    minWidth: "320px",
  },
  rightSection: {
    flex: "1 1 46%",
    minWidth: "320px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.07)",
    objectFit: "cover",
  },
};

export default AreaDetailPage;
