import { useEffect, useRef } from "react";
import GridBase from "../GridBase";

import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import AddRowHeader from "../AddRowHeader";
import DeleteRowRenderer from "../Cell Renderers/DeleteRowRenderer";

export default function WP3Grid({ emptyRow, rowData, columnDefs }) {
  const gridRef = useRef();

  useEffect(() =>
    columnDefs.push({
      field: "",
      headerComponent: AddRowHeader,
      headerComponentParams: {
        emptyRow
      },
      width: 50,
      cellRenderer: DeleteRowRenderer,
    }), [columnDefs, emptyRow]);

  return (<div className="ag-theme-balham" style={{ height: "100%" }}>
    <GridBase
      gridRef={gridRef}
      rowData={rowData}
      columnDefs={columnDefs}
      singleClickEdit={true}
    // onViewportChanged={editMostRecentRow}
    />
  </div>)
}