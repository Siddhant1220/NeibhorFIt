import React, { useState } from "react";
import areaRatings from "../data/areaRatings";
import LivabilityBreakdown from "../components/LivabilityBreakdown";

function CompareAreas() {
  const [area1, setArea1] = useState("");
  const [area2, setArea2] = useState("");

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📊 Compare Areas</h2>
      <div style={styles.selectRow}>
        <select onChange={(e) => setArea1(e.target.value)} value={area1}>
          <option value="">Select Area 1</option>
          {areaRatings.map((area) => (
            <option key={area.name} value={area.name}>{area.name}</option>
          ))}
        </select>

        <select onChange={(e) => setArea2(e.target.value)} value={area2}>
          <option value="">Select Area 2</option>
          {areaRatings.map((area) => (
            <option key={area.name} value={area.name}>{area.name}</option>
          ))}
        </select>
      </div>

      <div style={styles.compareRow}>
        {area1 && <LivabilityBreakdown areaName={area1} />}
        {area2 && <LivabilityBreakdown areaName={area2} />}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "1200px",
    margin: "0 auto"
  },
  heading: {
    fontSize: "2rem",
    textAlign: "center",
    marginBottom: "2rem"
  },
  selectRow: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "2rem"
  },
  compareRow: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap"
  }
};

export default CompareAreas;
