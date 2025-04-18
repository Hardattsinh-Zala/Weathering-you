import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../index.css";
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const theme = createTheme({

})

export default function FormPropsTextFields({getValue, enter}) {
  return (
    <Box
      className='sm:bg-black rounded-xl'
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off">
      <TextField
        sx={{
          input: {color: {sm: 'black', md: 'white'}},
          label: {color: {sm: 'black', md: 'white'}}
        }}
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
