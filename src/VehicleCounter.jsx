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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    gap: 0.5rem;
    height: calc(100vh - 80px);
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

const ResetButton = styled.button`
  margin-top: 1rem;
  padding: 0.7rem 1.2rem;
  font-size: 1rem;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #c0392b;
  }

  @media (max-width: 640px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
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

  useEffect(() => {
    const stored = localStorage.getItem("vehicle_counts_v1");
    if (stored) {
      const parsed = JSON.parse(stored);
      const fixed = {};
      categories.forEach((c) => {
        fixed[c.key] = typeof parsed[c.key] === "number" ? parsed[c.key] : 0;
      });
      setCounts(fixed);
    } else {
      const initial = {};
      categories.forEach((c) => (initial[c.key] = 0));
      setCounts(initial);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(counts).length > 0) {
      localStorage.setItem("vehicle_counts_v1", JSON.stringify(counts));
    }
  }, [counts]);

  const increment = (key) => {
    setCounts((prev) => ({
      ...prev,
      [key]: (prev[key] || 0) + 1,
    }));
  };

  const decrement = (key) => {
    setCounts((prev) => ({
      ...prev,
      [key]: Math.max((prev[key] || 0) - 1, 0),
    }));
  };

  const resetAll = () => {
    const reset = {};
    categories.forEach((c) => (reset[c.key] = 0));
    setCounts(reset);
  };

  return (
    <Container>
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
      <ResetButton onClick={resetAll}>Reset Semua</ResetButton>
    </Container>
  );
}
