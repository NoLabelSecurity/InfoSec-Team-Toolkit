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
    <div style={{ padding: 40 }}>
      <h1>🔐 InfoSec Team Toolkit</h1>

      <input
        placeholder="example.com"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        style={{ padding: 10, marginRight: 10 }}
      />

      <button onClick={lookup} style={{ padding: 10 }}>
        Whois Lookup
      </button>

      {result && (
        <pre
          style={{
            marginTop: 20,
            background: "#000",
            color: "#0f0",
            padding: 10,
            overflow: "auto",
          }}
        >
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
