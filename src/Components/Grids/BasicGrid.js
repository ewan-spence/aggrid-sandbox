import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import GridBase from "../GridBase";

export default function BasicGrid({ rowData, columnDefs }) {
  return (
    <div className="ag-theme-balham" style={{ height: "100%" }}>
      <GridBase
        rowData={rowData}
        columnDefs={columnDefs} />
    </div>)
}