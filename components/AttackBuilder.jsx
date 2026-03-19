
"use client";
import { useState } from "react";

export default function AttackBuilder() {
  const [nodes, setNodes] = useState([]);

  const addStep = () => {
    const newStep = {
      id: Date.now(),
      name: "New Step",
    };

    setNodes([...nodes, newStep]);
  };

  return (
    <div style={{ marginTop: 40 }}>
      <h2>⚔️ Attack Builder</h2>

      <button onClick={addStep}>Add Step</button>

      <ul>
        {nodes.map((node) => (
          <li key={node.id}>{node.name}</li>
        ))}
      </ul>
    </div>
  );
}
