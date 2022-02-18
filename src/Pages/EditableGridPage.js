import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

import { Container } from "react-bootstrap";

import EditableGrid from "../Components/Grids/EditableGrid";
import Title from "../Components/Title";

export default function EditableGridPage(props) {


    return (
        <Container style={{ height: "40vh" }}>
            <Title>Editable Grid</Title>
            The following is a grid with editable fields that
            <EditableGrid />
        </Container>)
}