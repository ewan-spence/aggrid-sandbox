import 'ag-grid-community';
import 'ag-grid-react';
import 'ag-grid-enterprise';

import "ag-grid-community/dist/styles/ag-theme-alpine.css"
import { useCallback, useRef, useState } from "react";
import GridBase from "../GridBase";
import { Button } from 'react-bootstrap';

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

const emptyRow = {
    fullName: "",
    email: "",
    organisation: "Save and Invest",
    adviser: ""
}

export default function EditableGrid(props) {
    const [rowData] = useState([
        {
            fullName: "Ewan Spence",
            email: "ewan.spence@saveandinvest.co.uk",
            organisation: "Save and Invest",
            adviser: "Jeffrey Deans"
        },
    ]);

    const [columnDefs] = useState([
        { field: "fullName", editable: true },
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
        console.log(params);

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

    const onButtonClick = () => {
        // Create transaction with a copy of the empty row
        var addRowTransaction = {
            add: [{ ...emptyRow }]
        };

        gridRef.current.api.applyTransaction(addRowTransaction);
    }

    const editMostRecentRow = (event) => {
        var cellParams = {
            rowIndex: event.lastRow,
            colKey: columnDefs[0].field
        }

        console.log(event.api)
        console.log(cellParams);

        event.api.startEditingCell(cellParams);
    }

    const gridRef = useRef();

    return (
        <div className="ag-theme-alpine" style={{ height: "100%" }}>
            <GridBase
                gridRef={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                editType='fullRow'
                onCellValueChanged={onCellValueChanged}
                onViewportChanged={editMostRecentRow}
            />
            <Button onClick={onButtonClick}>Click Me</Button>
        </div>
    )
}