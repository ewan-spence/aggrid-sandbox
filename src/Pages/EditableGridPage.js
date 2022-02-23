import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import { useCallback, useState } from 'react';

import { Container } from "react-bootstrap";

import EditableGrid from "../Components/Grids/EditableGrid";
import Title from "../Components/Title";

const orgAdviserMap = {
  "Save and Invest": ["Jeffrey Deans", "Callum Gorrie"],
  "Other Org": ["John Doe", "Jane Doe"]
};

const getAdvisersForOrg = (match) => {
  return orgAdviserMap[match];
}

const getCellEditorParams = (params) => {
  const selectedOrg = params.data.organisation;
  const allowedAdvisers = getAdvisersForOrg(selectedOrg);

  return {
    values: allowedAdvisers,
    formatValue: value => `${value} (${selectedOrg})`
  };
};

export default function EditableGridPage(props) {
  const [rowData] = useState([
    {
      fullName: "Ewan Spence",
      email: "ewan.spence@saveandinvest.co.uk",
      organisation: "Save and Invest",
      adviser: "Jeffrey Deans"
    },
  ]);

  const [columnDefs] = useState([
    { field: "fullName", editable: true, checkboxSelection: true },
    { field: "email", editable: true },
    {
      field: "organisation",
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: Object.keys(orgAdviserMap)
      },
      cellEditorPopup: true,
      editable: true
    },
    {
      field: "adviser",
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: getCellEditorParams,
      cellEditorPopup: true,
      editable: true
    },
  ]);

  const onCellValueChanged = useCallback(params => {
    const colId = params.column.getId();

    if (colId === "organisation") {
      const selectedOrg = params.data.organisation;
      const selectedAdviser = params.data.adviser;
      const allowedAdvisers = getAdvisersForOrg(selectedOrg);


      const adviserMismatch = allowedAdvisers.indexOf(selectedAdviser) < 0;

      if (adviserMismatch) {
        params.node.setDataValue('adviser', null);
      }
    }
  }, []);

  return (
    <Container style={{ height: "40vh" }}>
      <Title>Editable Grid</Title>
      The following is a grid with editable rows that can be added or removed using buttons, styled with the AG-Alpine theme:
      <br /><br />
      <EditableGrid
        rowData={rowData}
        columnDefs={columnDefs}
        onCellValueChanged={onCellValueChanged}
        emptyRow={{
          fullName: "",
          email: "",
          organisation: "Save and Invest",
          adviser: ""
        }} />
    </Container>)
}