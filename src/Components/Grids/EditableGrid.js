import 'ag-grid-community';
import "ag-grid-community/dist/styles/ag-theme-alpine.css"
import 'ag-grid-react';
import 'ag-grid-enterprise';

import { useCallback, useEffect, useRef, useState } from "react";
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

export default function EditableGrid({ emptyRow }) {
    const gridRef = useRef();

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

    const onAddRowClick = () => {
        // Create transaction with a copy of the empty row
        var addRowTransaction = {
            add: [{ ...emptyRow }]
        };

        gridRef.current.api.applyTransaction(addRowTransaction);
    }

    const onDeleteRowClick = () => {
        var delRowTransaction = {
            remove: gridRef.current.api.getSelectedRows()
        }

        gridRef.current.api.applyTransaction(delRowTransaction)
    };

    const editMostRecentRow = () => {
        gridRef.current.api.stopEditing();

        var cellParams = {
            rowIndex: gridRef.current.props.rowData.length,
            colKey: gridRef.current.props.columnDefs[0].field
        }

        gridRef.current.api.startEditingCell(cellParams);
    }

    return (
        <div className="ag-theme-alpine" style={{ height: "100%" }}>
            <GridBase
                gridRef={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                editType='fullRow'
                rowSelection='multiple'
                enableRangeSelection={true}
                onCellValueChanged={onCellValueChanged}
                onViewportChanged={editMostRecentRow}
            />
            <Button className="m-3" onClick={onAddRowClick}>Add Empty Row</Button>
            <Button className="m-3" variant="danger" onClick={onDeleteRowClick}>Delete Selected Row</Button>
        </div>
    )
}