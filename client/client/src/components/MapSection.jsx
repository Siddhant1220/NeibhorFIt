
function MapSection() {
  return (
    <div style={styles.container}>
      {/* Left — Map Image */}
      <div style={styles.leftSection}>
        <img src="/images/delhi1.jpg" alt="Delhi Map" style={styles.mapImage} />
      </div>

      {/* Right — Best Places Text */}
      <div style={styles.rightSection}>
        <h2 style={styles.heading}>Best Places to Live in Delhi 🏙️</h2>
        <p style={styles.description}>
          Discover the heartbeat of India’s capital city — where ancient history meets modern living.
          From the serene streets of <strong>Dwarka</strong> to the chic café culture of <strong>Hauz Khas</strong>, and the bustling markets of <strong>Sarojini Nagar</strong>,
          Delhi offers a neighborhood for every vibe.
        </p>
        <ul style={styles.list}>
          <li>🌳 Green parks & heritage monuments around every corner</li>
          <li>🚇 Seamless Metro connectivity from East to West</li>
          <li>🥘 Street food heaven — from Chaat to Momos</li>
          <li>🛍️ Shop till you drop at Janpath & Dilli Haat</li>
          <li>🎭 Cultural hubs, art districts & weekend flea markets</li>
        </ul>
        <p style={{ ...styles.description, marginTop: "1rem" }}>
          With NeighborFit, find the neighborhoods that truly match your lifestyle, commute needs, and weekend hangout plans.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "3rem 2rem",
    gap: "2rem",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  leftSection: {
    flex: "1 1 45%",
  },
  mapImage: {
    width: "100%",
    borderRadius: "12px",
    objectFit: "cover",
  },
  rightSection: {
    flex: "1 1 50%",
  },
  heading: {
    fontSize: "2.3rem",
    fontWeight: "700",
    marginBottom: "1rem",
    color: "#111",
  },
  description: {
    fontSize: "1.1rem",
    color: "#555",
    lineHeight: "1.7",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "1rem",
    fontSize: "1rem",
    lineHeight: "1.7",
  },
};

export default MapSection;
