import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { useState } from "react";

import GridBase from "../GridBase";


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

    return (
        <div className="ag-theme-balham" style={{ height: "100%" }}>
            <GridBase
                rowData={rowData}
                columnDefs={columnDefs} />
        </div>)
}