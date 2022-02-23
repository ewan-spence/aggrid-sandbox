import { Container } from "react-bootstrap";
import BasicGrid from "../Components/Grids/BasicGrid";

import "../App.css";
import Title from "../Components/Title";
import { useState } from "react";

export default function BasicGridPage(props) {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ])

  const [columnDefs] = useState([
    { field: "make" },
    { field: "model" },
    {
      field: "price",
      valueFormatter: (params) => `£${params.value}`
    }
  ]);

  return <Container style={{ height: "40vh" }}>
    <Title>Basic Grid</Title>
    The following is a simple table with columns dynamically sized to fill the width of the Container, styled with the AG-Balham theme:
    <br /><br />
    <BasicGrid rowData={rowData} columnDefs={columnDefs} />
  </Container>
}