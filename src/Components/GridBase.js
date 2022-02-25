import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";

export default function GridBase({ gridRef, defaultColProps, ...props }) {

  const defaultColDef = useMemo(() => ({
    resizable: true,
    sortable: true,
    ...defaultColProps
  }), [defaultColProps]);

  const defaultColSize = ({ api }) => api.sizeColumnsToFit();

  return <AgGridReact
    ref={gridRef}
    defaultColDef={defaultColDef}
    onFirstDataRendered={defaultColSize}
    onComponentStateChanged={({ api }) => api.sizeColumnsToFit()}
    {...props}
  />
}