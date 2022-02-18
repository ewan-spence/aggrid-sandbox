import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";

export default function GridBase({ gridRef, ...props }) {

    const defaultColDef = useMemo(() => ({
        resizable: true
    }), []);

    const defaultColSize = ({ api }) => api.sizeColumnsToFit();

    return <AgGridReact
        ref={gridRef}
        defaultColDef={defaultColDef}
        onFirstDataRendered={defaultColSize}
        onComponentStateChanged={({ api }) => api.sizeColumnsToFit()}
        {...props}
    ></AgGridReact>
}