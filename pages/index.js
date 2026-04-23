export default function Home() {
  async function handleReconnect() {
    alert("Reconnect clicked!");
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Crossy</h1>

      <p style={styles.subtitle}>
        People you may have crossed in real life
      </p>

      <div style={styles.list}>
        <div style={styles.card}>✈️ Airport Milan — 2h ago</div>
        <div style={styles.card}>🚆 Train Station — Yesterday</div>
        <div style={styles.card}>☕ Coffee Bar — Today</div>
      </div>

      <button style={styles.button} onClick={handleReconnect}>
        Reconnect
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "#0b0b0f",
    color: "white",
    fontFamily: "Arial",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 20,
  },

  title: {
    fontSize: 52,
    marginBottom: 10,
  },

  subtitle: {
    opacity: 0.7,
    marginBottom: 40,
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  card: {
    background: "#1a1a22",
    padding: "12px 18px",
    borderRadius: 12,
    width: 280,
    textAlign: "center",
  },

  button: {
    marginTop: 30,
    padding: "12px 24px",
    borderRadius: 12,
    background: "linear-gradient(90deg,#7c3aed,#2563eb)",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};
