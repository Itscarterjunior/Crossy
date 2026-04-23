import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";export default function Home() {
 async function handleReconnect() {
  try {
    await addDoc(collection(db, "crosses"), {
      place: "Coffee Bar",
      time: serverTimestamp(),
      status: "active"
    });

    alert("Reconnect saved!");
  } catch (e) {
    console.error(e);
  }
} return (
    <div style={{
      height: "100vh",
      background: "#0b0b0f",
      color: "white",
      fontFamily: "Arial",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: 20
    }}>
      
      <h1 style={{ fontSize: 52, marginBottom: 10 }}>Crossy</h1>

      <p style={{ opacity: 0.7, marginBottom: 40 }}>
        People you may have crossed in real life
      </p>

      {/* DEMO CARDS */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        
        <div style={cardStyle}>
          ✈️ Airport Milan — 2h ago
        </div>

        <div style={cardStyle}>
          🚆 Train Station — Yesterday
        </div>

        <div style={cardStyle}>
          ☕ Coffee Bar — Today
        </div>

      </div>

      <button style={buttonStyle} onClick={handleReconnect}>
  Reconnect

      </button>
    </div>
  );
}

const cardStyle = {
  background: "#1a1a22",
  padding: "12px 18px",
  borderRadius: 12,
  width: 280,
  textAlign: "center"
};

const buttonStyle = {
  marginTop: 30,
  padding: "12px 24px",
  borderRadius: 12,
  background: "linear-gradient(90deg,#7c3aed,#2563eb)",
  color: "white",
  border: "none",
  cursor: "pointer"
};
