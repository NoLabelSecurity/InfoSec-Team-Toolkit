"use client";
import { useState } from "react";

export default function Home() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState(null);

  const lookup = async () => {
    const res = await fetch("/api/whois", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ domain }),
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ fontSize: 28, marginBottom: 20 }}>
        🔐 InfoSec Team Toolkit
      </h1>

      {/* TOOL CARD */}
      <div
        style={{
          border: "1px solid #333",
          padding: 20,
          borderRadius: 10,
          maxWidth: 500,
        }}
      >
        <h2>Whois Lookup</h2>

        <input
          placeholder="example.com"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          style={{ width: "100%", padding: 10, marginTop: 10 }}
        />

        <button
          onClick={lookup}
          style={{
            marginTop: 10,
            padding: 10,
            width: "100%",
            background: "#00ff99",
            border: "none",
            cursor: "pointer",
          }}
        >
          Run Tool
        </button>

        {result && (
          <pre
            style={{
              marginTop: 15,
              background: "#000",
              color: "#0f0",
              padding: 10,
              fontSize: 12,
              overflow: "auto",
            }}
          >
            {JSON.stringify(result, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
