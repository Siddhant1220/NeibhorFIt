function HomeInfo() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Text on Left */}
        <div style={styles.textSection}>
          <h2 style={styles.heading}>Your Ideal Neighborhood with NeighborFit 🏘️</h2>
          <p style={styles.text}>
            Discover communities that perfectly align with your lifestyle preferences — whether you prioritize safety, affordability, social vibe, or nearby amenities.
          </p>
          <ul style={styles.list}>
            <li>🏙️ Compare real-time neighborhood insights</li>
            <li>💡 Personalized lifestyle-based matching</li>
            <li>📊 Check safety, affordability, and livability scores</li>
            <li>🌐 Access open-data sources and local reviews</li>
          </ul>
        </div>

        {/* Image on Right */}
        <div style={styles.imageSection}>
          <img src="/images/img1.jpg" alt="Delhi Map" style={styles.mapImage} />
        </div>
      </div>
    </div>
  );
}

// const styles = {
//   wrapper: {
//     padding: "3rem 2rem",
//     backgroundColor: "#f9f9f9"
//   },
//   container: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     gap: "2rem",
//     maxWidth: "1200px",
//     margin: "0 auto",
//     flexWrap: "wrap"
//   },
//   textSection: {
//     flex: "1 1 50%",
//     fontFamily: "Arial, sans-serif"
//   },
//   heading: {
//     fontSize: "2.2rem",
//     fontWeight: "700",
//     marginBottom: "1rem"
//   },
//   text: {
//     fontSize: "1.05rem",
//     lineHeight: "1.6",
//     marginBottom: "1rem"
//   },
//   list: {
//     listStyle: "none",
//     padding: 0,
//     margin: 0,
//     fontSize: "1rem",
//     lineHeight: "1.6"
//   },
//   imageSection: {
//     flex: "1 1 45%",
//     textAlign: "center"
//   },
//   mapImage: {
//     width: "100%",
//     maxWidth: "450px",
//     height: "auto",
//     borderRadius: "12px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
//   }
// };

const styles = {
  wrapper: {
    padding: "3rem 2rem",
    backgroundColor: "#f9f9f9",
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap"
  },
  textSection: {
    flex: "1 1 50%"
  },
  heading: {
    fontSize: "2.2rem",
    fontWeight: "700",
    marginBottom: "1rem"
  },
  text: {
    fontSize: "1.05rem",
    lineHeight: "1.6",
    marginBottom: "1rem"
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontSize: "1rem",
    lineHeight: "1.6"
  },
  imageSection: {
    flex: "1 1 45%",
    textAlign: "center"
  },
  mapImage: {
    width: "100%",
    maxWidth: "450px",
    height: "auto",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  }
};

export default HomeInfo;
