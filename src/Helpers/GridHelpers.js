export const addRow = (gridApi, emptyRow) => {
  // Create transaction with a copy of the empty row
  var addRowTransaction = {
    add: [{ ...emptyRow }]
  };

  gridApi.applyTransaction(addRowTransaction);
}

export const deleteRow = (gridApi, rowData) => {
  var delRowTransaction = {
    remove: [rowData]
  }

  gridApi.applyTransaction(delRowTransaction)
}