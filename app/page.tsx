"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Crossy</h1>
        <p className="home-subtitle">Real-world human connections in real time</p>

        <Link href="/nearby">
          <button className="cta-button">
            Connect Instantly
            <span className="button-glow"></span>
          </button>
        </Link>

        <div className="floating-elements">
          <div className="float-element" style={{ animationDelay: "0s" }}></div>
          <div className="float-element" style={{ animationDelay: "2s" }}></div>
          <div className="float-element" style={{ animationDelay: "4s" }}></div>
        </div>
      </div>
    </div>
  );
}