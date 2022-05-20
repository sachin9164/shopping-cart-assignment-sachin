import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    backgroundColor : '#fff',
    borderRadius : "0px"
  }));

function Login() {
  return (
    <React.Fragment>
<Container maxWidth="lg">
<Grid container  spacing={1}>
<Grid item xs={12} md={6}>
    <Item style={{boxShadow : "none"}}><h2>Login</h2>
    Get Access to your Orders, Wishlist and Recommendations</Item>
  </Grid>
  <Grid item xs={12} md={6}>
    <Item style={{boxShadow : "none"}} >
    <TextField id="standard-basic" label="Email"  variant="standard" fullWidth /><br/><br/>
    <TextField id="standard-basic" label="Password" variant="standard" fullWidth/><br/><br/><br/>
    <Button variant="contained" color="error" fullWidth >
  Login
</Button>

    </Item>
  </Grid>
</Grid>
</Container>
    </React.Fragment>
  )
}

export default Login