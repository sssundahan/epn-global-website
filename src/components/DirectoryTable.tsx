
import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'company', headerName: 'Company', width: 150 },
  { field: 'title', headerName: 'Title', width: 150 },
];

const rows = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', company: 'ABC Corp', title: 'CEO' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', company: 'XYZ Inc', title: 'CTO' },
  { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com', company: '123 Ltd', title: 'CFO' },
];

const DirectoryTable = () => {
  return (
    <Box sx={{ height: 400, width: '100%', m: 2 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default DirectoryTable;
