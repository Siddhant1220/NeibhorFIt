import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const handleLogout = () => {
    localStorage.removeItem("userId");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>🏡 NeighborFit</Link>

      <div style={styles.links}>
        <Link to="/" style={styles.button}>Home</Link>
        <Link to="/map" style={styles.button}>Map</Link>
          {/* <Link to="/compare" style={styles.button}>Compare</Link> */}
        {userId ? (
          <>
            <Link to="/dashboard" style={styles.button}>Areas</Link>
            <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
          </>
        ) : (
          <>
        

            <Link to="/login" style={styles.button}>Login</Link>
            <Link to="/signup" style={styles.button}>Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.8rem 2rem",
    backgroundColor: "#e2e8f0",
    borderBottom: "1px solid #d1d5db",
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "600",
    textDecoration: "none",
    color: "#333"
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "1rem"
  },
  button: {
    textDecoration: "none",
    padding: "0.5rem 1rem",
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "0.95rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  },
  logoutButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "0.95rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  }
};

export default Navbar;

