import { useState } from "react";

import DateCellEditor from "../Components/Cell Renderers/DateCellEditor";
import WP3Grid from "../Components/Grids/WP3Grid";
import Title from "../Components/Title";

import Container from "react-bootstrap/Container";

export default function WP3GridPage(props) {
  const emptyRow = {
    title: "",
    forename: "",
    surname: "",
    status: "Active"
  };

  const [rowData] = useState([
    {
      title: "Mr.",
      forenames: "Michael John",
      surname: "Clarke",
      status: "Active",
      statusDate: ""//fromUkDate("12/01/2022")
    },
    {
      title: "Ms.",
      forenames: "Ann",
      surname: "Clarke",
      statusDate: ""//fromUkDate("14/01/2022")
    }
  ]);

  const [columnDefs] = useState([
    {
      field: "title",
      headerName: "Title",
      editable: true
    },
    {
      field: "forenames",
      headerName: "Forename(s)",
      editable: true
    },
    {
      field: "surname",
      headerName: "Surname",
      editable: true
    },
    {
      field: "status",
      headerName: "Status",
      editable: true,
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: ["Active", "Standby", "Deceased"]
      },
      cellEditorPopup: true
    },
    {
      field: "statusDate",
      headerName: "Status Date",
      editable: true,
      cellEditor: DateCellEditor,
      cellEditorPopup: true
    }
  ]);

  return (
    <Container style={{ height: "40vh" }}>
      <Title>WP3 Grid</Title>
      The following is a simple table with columns dynamically sized to fill the width of the Container, styled with the AG-Balham theme:
      <br /><br /><WP3Grid
        emptyRow={emptyRow}
        rowData={rowData}
        columnDefs={columnDefs}
      />
    </Container>)
}