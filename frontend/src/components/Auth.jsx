import React, { useState } from "react";
import axios from "axios";

const API = "https://usha-store.onrender.com"; // 🔹 use your deployed backend

const Auth = ({ setIsAuthenticated, setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  // ✅ handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ handle login/signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // 🔹 LOGIN
        const res = await axios.post(`${API}/login`, form);

        localStorage.setItem("token", res.data.token); // save token
        localStorage.setItem("user", JSON.stringify(res.data.user)); // save user info

        setIsAuthenticated(true); // open main page
        setUser(res.data.user);   // update app state
      } else {
        // 🔹 SIGNUP
        const res = await axios.post(`${API}/signup`, form);
        setMessage(res.data.msg);
        setIsLogin(true); // switch to login after signup
      }
    } catch (err) {
      console.error("Auth error:", err.response?.data || err.message);
      setMessage(err.response?.data?.msg || "Error occurred");
    }
  };

  return (
    <div className="auth-container" style={styles.container}>
      <h2 style={styles.heading}>{isLogin ? "Login" : "Signup"}</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>

      {message && <p style={{ color: "red", marginTop: "10px" }}>{message}</p>}

      <p
        onClick={() => setIsLogin(!isLogin)}
        style={{ cursor: "pointer", color: "blue", marginTop: "15px" }}
      >
        {isLogin
          ? "Don't have an account? Signup"
          : "Already have an account? Login"}
      </p>
    </div>
  );
};

// ✅ Inline styles
const styles = {
  container: {
    maxWidth: "400px",
    margin: "100px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    background: "#fff",
  },
  heading: {
    marginBottom: "20px",
    fontFamily: "Bungee, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    background: "dodgerblue",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default Auth;
