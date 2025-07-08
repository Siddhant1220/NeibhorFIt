// function LivabilityMetrics() {
//   return (
//     <div style={styles.container}>
//       <img
//         src="/images/home-livability.jpg"
//         alt="Neighborhood Metrics"
//         style={styles.image}
//       />
//     </div>
//   );
// }


// const styles = {
//   container: {
//     maxWidth: "1200px",
//     margin: "2rem auto",
//     padding: "0 1rem",
//   },
//   image: {
//     width: "100%",
//     borderRadius: "16px",
//     objectFit: "cover",
//     boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
//     transition: "transform 0.3s ease",
//   },
// };


// export default LivabilityMetrics;


import React from "react";
import {
  FaBus,
  FaMoneyBillWave,
  FaGavel,
  FaBriefcase,
  FaHeartbeat,
  FaHome,
  FaSchool,
  FaStar,
} from "react-icons/fa";
import { MdOutlineGroups, MdOutlineThumbUp } from "react-icons/md";

function LivabilityMetrics() {
  const metrics = [
    { icon: <MdOutlineThumbUp size={40} />, label: "Livability" },
    { icon: <MdOutlineGroups size={40} />, label: "Amenities" },
    { icon: <FaBus size={40} />, label: "Commute" },
    { icon: <FaMoneyBillWave size={40} />, label: "Cost of Living" },
    { icon: <FaGavel size={40} />, label: "Crime" },
    { icon: <FaBriefcase size={40} />, label: "Employment" },
    { icon: <FaHeartbeat size={40} />, label: "Health & Safety" },
    { icon: <FaHome size={40} />, label: "Housing" },
    { icon: <FaSchool size={40} />, label: "Schools" },
    { icon: <FaStar size={40} />, label: "User Ratings" },
  ];

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>🏘️ Neighborhood Metrics</h2>
      <div style={styles.grid}>
        {metrics.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{item.icon}</div>
            <p style={styles.label}>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// const styles = {
//   wrapper: {
//     maxWidth: "1100px",
//     margin: "3rem auto",
//     padding: "2rem",
//     fontFamily: "Poppins, sans-serif",
//     textAlign: "center",
//   },
//   heading: {
//     fontSize: "2.5rem",
//     fontWeight: "800",
//     marginBottom: "2.5rem",
//     color: "#0f172a",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
//     gap: "2.5rem",
//   },
//   card: {
//     backgroundColor: "#f1f5f9",
//     borderRadius: "14px",
//     padding: "1.5rem",
//     boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
//     transition: "all 0.3s ease",
//   },
//   icon: {
//     marginBottom: "1rem",
//     color: "#334155",
//   },
//   label: {
//     fontSize: "1.05rem",
//     fontWeight: "600",
//     color: "#334155",
//   },
// };
const styles = {
  wrapper: {
    maxWidth: "1300px",  // increased width
    margin: "3rem auto",
    padding: "2rem",
    fontFamily: "Poppins, sans-serif",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.3rem",
    fontWeight: "800",
    marginBottom: "2.5rem",
    color: "#0f172a",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",  // increased card width
    gap: "2.5rem",
  },
  card: {
    backgroundColor: "#f1f5f9",
    borderRadius: "14px",
    padding: "2rem",   // increased padding
    boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
  },
  icon: {
    marginBottom: "1rem",
    color: "#334155",
  },
  label: {
    fontSize: "1.2rem",   // slight increase for clarity
    fontWeight: "600",
    color: "#334155",
  },
};


export default LivabilityMetrics;
