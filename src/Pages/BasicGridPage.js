import { Container } from "react-bootstrap";
import BasicGrid from "../Components/Grids/BasicGrid";

import "../App.css";
import Title from "../Components/Title";

export default function BasicGridPage(props) {
    return <Container style={{ height: "40vh" }}>
        <Title>Basic Grid</Title>
        The following is a simple table with columns dynamically sized to fill the width of the Container:
        <br />
        <br />
        <BasicGrid />
    </Container>
}