import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { padding } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    backgroundColor : '#ddd',
    borderRadius : "0px",
    paddingLeft : '40px',
    marginTop : '40px'
  }));

function Footer() {
  return (
      <React.Fragment>
          <Grid item xs={12} md={12}>
    <Item style={{boxShadow : "none"}}>Copyright 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd</Item>
  </Grid>
      </React.Fragment>
  
  )
}

export default Footer