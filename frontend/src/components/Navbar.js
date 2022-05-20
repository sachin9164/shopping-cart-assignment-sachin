import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { Hidden } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border : "none" ,
    boxShadow : "0px",
    padding : '3px',
    
  }));

function Navbar() {
  return (
    <React.Fragment>
    <Container maxWidth="lg">
    <Grid container spacing={1}>
<Grid item xs={2} md={2}>
  <Item style={{boxShadow : "none"}}>
  <img src={logo} width="100%" />
  </Item>
</Grid>
<Grid item xs={6} md={8} style={{marginTop: "30px"}}>
  <Hidden smDown>
  <Item style={{boxShadow : "none"}}>
  <Stack direction="row" spacing={2}>
  <Item style={{boxShadow : "none"}}>
      <Link to='/'>
      Home
      </Link>
      </Item>
  <Item style={{boxShadow : "none"}}>
  <Link to='/login'>Products</Link></Item>
    </Stack>
  </Item>
  </Hidden>
</Grid>
<Grid item xs={2} md={2}>
  <Item style={{boxShadow : "none"}}> <Stack direction="row" spacing={0}>
  <Item style={{boxShadow : "none"}}>SignIn</Item>
  <Item style={{boxShadow : "none"}}>Register</Item>
    </Stack></Item>
  <Item style={{boxShadow : "none"}}><Stack direction="row" spacing={1}>
  <Item style={{boxShadow : "none"}}><ShoppingCartIcon/></Item>
  <Item style={{boxShadow : "none"}}>0 Items</Item>
    </Stack></Item>
</Grid>
</Grid>
    </Container>
    <Outlet/>
  </React.Fragment>
  )
}

export default Navbar