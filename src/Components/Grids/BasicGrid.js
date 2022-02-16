import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useMemo, useRef, useState } from "react";


export default function BasicGrid(props) {

    const [rowData] = useState([
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
    ])

    const [columnDefs] = useState([
        { field: "make" },
        { field: "model" },
        {
            field: "price",
            valueFormatter: (params) => `£${params.value}`
        }
    ]);

    const defaultColDefs = useMemo(() => ({
        resizable: true
    }), []);

    const gridRef = useRef();

    const onGridReady = ({ api }) => {
        api.sizeColumnsToFit();
    }

    return (
        <div className="ag-theme-balham" style={{ height: "100%" }}>
            <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDefs}
                onGridReady={onGridReady}
            >

            </AgGridReact>
        </div>)
}