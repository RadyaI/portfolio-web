import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background-color: #121212;
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  justify-content: center;
  max-width: 1000px;
  width: 100%;

  @media (max-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    gap: 0.5rem;
    height: calc(100vh - 150px);
  }
`;

const Card = styled.div`
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 640px) {
    padding: 0.4rem;
  }
`;

const Label = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.5rem;

  @media (max-width: 640px) {
    font-size: 0.75rem;
    margin-bottom: 0.3rem;
  }
`;

const Count = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media (max-width: 640px) {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }
`;

const BigButton = styled.button`
  width: 100%;
  padding: 0.8rem 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 0.5rem;
  transition: transform 0.1s ease;

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 640px) {
    padding: 0.4rem 0;
    font-size: 0.9rem;
  }
`;

const SmallButton = styled.button`
  width: 100%;
  padding: 0.4rem 0;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #555;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.1s ease;

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 640px) {
    padding: 0.3rem 0;
    font-size: 0.8rem;
  }
`;

const BottomButtons = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled.button`
  padding: 0.7rem 1rem;
  font-size: 0.9rem;
  background-color: ${(props) => props.bg || "#333"};
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: ${(props) => props.hover || "#555"};
  }

  @media (max-width: 640px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.8rem;
  }
`;

const Notification = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: #27ae60;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  color: #fff;
  font-size: 0.9rem;
  z-index: 1000;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalContent = styled.div`
  background-color: #1e1e1e;
  padding: 1rem;
  border-radius: 10px;
  max-width: 90%;
  max-height: 80%;
  overflow: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #f0f0f0;
  font-size: 0.85rem;

  th, td {
    border: 1px solid #444;
    padding: 0.4rem;
    text-align: center;
  }

  th {
    background-color: #333;
    position: sticky;
    top: 0;
  }
`;

const categories = [
  { key: "motorN", label: "Motor N", color: "#3498db" },
  { key: "motorNonN", label: "Motor Non N", color: "#9b59b6" },
  { key: "mobilN", label: "Mobil N", color: "#27ae60" },
  { key: "mobilNonN", label: "Mobil Non N", color: "#e67e22" },
  { key: "grab", label: "Grab", color: "#16a085" },
  { key: "gojek", label: "Gojek", color: "#2ecc71" },
  { key: "maxim", label: "Maxim", color: "#f1c40f" },
  { key: "shoppe", label: "Shoppe", color: "#e74c3c" },
  { key: "truck", label: "Truck", color: "#95a5a6" },
];

export default function VehicleCounter() {
  const [counts, setCounts] = useState({});
  const [reports, setReports] = useState([]);
  const [notif, setNotif] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedCounts = localStorage.getItem("vehicle_counts_v1");
    const storedReports = localStorage.getItem("vehicle_reports_v1");

    if (storedCounts) setCounts(JSON.parse(storedCounts));
    else {
      const init = {};
      categories.forEach((c) => (init[c.key] = 0));
      setCounts(init);
    }

    if (storedReports) setReports(JSON.parse(storedReports));
  }, []);

  useEffect(() => {
    if (Object.keys(counts).length > 0) {
      localStorage.setItem("vehicle_counts_v1", JSON.stringify(counts));
    }
  }, [counts]);

  const increment = (key) => setCounts((p) => ({ ...p, [key]: (p[key] || 0) + 1 }));
  const decrement = (key) =>
    setCounts((p) => ({ ...p, [key]: Math.max((p[key] || 0) - 1, 0) }));

  const resetAll = () => {
    const reset = {};
    categories.forEach((c) => (reset[c.key] = 0));
    setCounts(reset);
  };

  const saveReport = () => {
    const timestamp = new Date().toLocaleString();
    const newReport = { timestamp, ...counts };
    const updated = [...reports, newReport];
    setReports(updated);
    localStorage.setItem("vehicle_reports_v1", JSON.stringify(updated));
    setNotif(true);
    setTimeout(() => setNotif(false), 1500);
  };

  const resetReports = () => {
    setReports([]);
    localStorage.removeItem("vehicle_reports_v1");
  };

  return (
    <Container>
      {notif && <Notification>✅ Report saved!</Notification>}
      <Title>🚦 Vehicle Counter</Title>
      <Grid>
        {categories.map((cat) => (
          <Card key={cat.key}>
            <Label>{cat.label}</Label>
            <Count>{counts[cat.key] ?? 0}</Count>
            <BigButton color={cat.color} onClick={() => increment(cat.key)}>
              +
            </BigButton>
            <SmallButton onClick={() => decrement(cat.key)}>-</SmallButton>
          </Card>
        ))}
      </Grid>

      <BottomButtons>
        <Button bg="#27ae60" hover="#1e8449" onClick={saveReport}>
          💾 Save Report
        </Button>
        <Button bg="#2980b9" hover="#1f618d" onClick={() => setShowModal(true)}>
          📊 Lihat Report
        </Button>
        <Button bg="#e74c3c" hover="#c0392b" onClick={resetAll}>
          🔄 Reset Counter
        </Button>
      </BottomButtons>

      <ModalOverlay show={showModal}>
        <ModalContent>
          <h3>📋 Saved Reports</h3>
          {reports.length === 0 ? (
            <p style={{ textAlign: "center", marginTop: "1rem" }}>Belum ada report tersimpan.</p>
          ) : (
            <>
              <Table>
                <thead>
                  <tr>
                    <th>Waktu</th>
                    {categories.map((c) => (
                      <th key={c.key}>{c.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {reports.map((r, i) => (
                    <tr key={i}>
                      <td>{r.timestamp}</td>
                      {categories.map((c) => (
                        <td key={c.key}>{r[c.key]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Button
                bg="#e74c3c"
                hover="#c0392b"
                style={{ marginTop: "0.8rem", width: "100%" }}
                onClick={resetReports}
              >
                🧹 Hapus Semua Report
              </Button>
            </>
          )}
          <Button
            style={{ marginTop: "0.8rem", width: "100%" }}
            onClick={() => setShowModal(false)}
          >
            ✖️ Tutup
          </Button>
        </ModalContent>
      </ModalOverlay>
    </Container>
  );
}
