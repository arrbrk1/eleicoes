import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [candidates, setCandidates] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      "https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json"
    )
      .then((response) => response.json())
      .then((data) => setCandidates(data.cand));
  });

  return (
    <div className="App">
      {candidates.map((candidate) => (
        <div key={candidate.seq}>
          <h1>{candidate.nm}</h1>
          <h2 style={{ color: "green" }}>Votos: {candidate.vap}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
