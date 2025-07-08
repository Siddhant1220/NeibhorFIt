import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message);
      localStorage.setItem("userId", data.userId);
      // ✅ redirect to the user's personal page
      navigate(`/user/${data.userId}`);
    } else {
      alert(data.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📝 Create Your Account</h2>
      <form style={styles.form} onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          style={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>

      <p style={styles.text}>
        Already have an account?{" "}
        <a href="/login" style={styles.link}>Login</a>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "5rem auto",
    padding: "2rem",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
  },
  title: {
    marginBottom: "1.8rem",
    fontSize: "2rem",
    fontWeight: "600",
    color: "#111827",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.8rem 1rem",
    fontSize: "1rem",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    backgroundColor: "#f9fafb",
    transition: "border 0.3s ease",
  },
  button: {
    padding: "0.85rem 1rem",
    fontSize: "1rem",
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "background-color 0.3s ease",
  },
  text: {
    marginTop: "1.5rem",
    fontSize: "0.92rem",
    color: "#4b5563",
  },
  link: {
    color: "#3b82f6",
    textDecoration: "none",
    fontWeight: "500",
  },
};


export default SignupPage;

