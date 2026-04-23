export default function Home() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#0b0b0f",
      color: "white",
      fontFamily: "Arial"
    }}>
      <h1 style={{ fontSize: 48 }}>Crossy</h1>
      <p style={{ opacity: 0.7 }}>Real-world human connections</p>

      <button style={{
        marginTop: 20,
        padding: "10px 20px",
        borderRadius: 10,
        border: "none",
        background: "linear-gradient(90deg, #7c3aed, #2563eb)",
        color: "white",
        cursor: "pointer"
      }}>
        Connect
      </button>
    </div>
  );
}
