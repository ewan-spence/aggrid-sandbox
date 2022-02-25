import 'ag-grid-community';
import "ag-grid-community/dist/styles/ag-theme-alpine.css"
import 'ag-grid-react';
import 'ag-grid-enterprise';

import { useRef } from "react";
import GridBase from "../GridBase";
import { Button } from 'react-bootstrap';

export default function EditableGrid({ emptyRow, rowData, columnDefs, onCellValueChanged }) {
  const gridRef = useRef();

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