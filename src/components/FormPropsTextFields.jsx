import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../index.css";

export default function FormPropsTextFields({getValue, enter}) {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off">
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        variant="standard"
        placeholder='City'
        onKeyDown={(e) => {
          if(e.key === 'Enter') getValue(e);
        }}
      />
    </Box>
  );
}
