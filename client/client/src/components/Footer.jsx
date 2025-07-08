function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.navLinks}>
        <a href="/" style={styles.link}>Home</a>
        <a href="/about" style={styles.link}>About</a>
        <a href="/contact" style={styles.link}>Contact</a>
        <a href="/blog" style={styles.link}>Blog</a>
      </div>

      <div style={styles.divider}></div>

      <p style={styles.credit}>
        👨‍💻 Developed by <strong>Siddhant Dubey</strong> © {new Date().getFullYear()}
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#f1f5f9",
    padding: "2.5rem 2rem",
    textAlign: "center",
    marginTop: "3rem",
    borderTop: "1px solid #cbd5e1",
    fontFamily: "'Poppins', sans-serif",
  },
  navLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    marginBottom: "1.5rem",
    flexWrap: "wrap",
  },
  link: {
  textDecoration: "none",
  color: "#334155",
  fontSize: "1.05rem",
  fontWeight: "500",
  transition: "color 0.3s ease",
  ":hover": {
    color: "#3b82f6",
  },
}

 ,
  divider: {
    height: "1px",
    backgroundColor: "white",
    width: "60%",
    margin: "1.5rem auto",
  },
  credit: {
    fontSize: "0.95rem",
    color: "#64748b",
    marginTop: "0.5rem",
  },
};

export default Footer;
