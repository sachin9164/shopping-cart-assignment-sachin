import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Hidden } from "@mui/material";
import Button from "@mui/material/Button";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "none",
  boxShadow: "none",
}));

function Navbar() {
  const [open, setOpen] = React.useState(false);

  const cart = useSelector((state) => state.cart);
  const handleOpen = () => setOpen(true);
  return (
    <nav>
      <Cart
        setOpen={setOpen}
        open={open}
        cartItemsSize={cart.cartItems.length}
        cartTotal={cart.total}
      />
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={2} md={2}>
            <Item style={{ boxShadow: "none" }}>
              <img src={logo} width="100%" alt="Main Logo" />
            </Item>
          </Grid>

          <Grid item xs={6} md={8} style={{ marginTop: "30px" }}>
            <Hidden smDown>
              <Item>
                <Stack direction="row" spacing={2}>
                  <Item>
                    <Link to="/">Home</Link>
                  </Item>
                  <Item>
                    <Link to="/products">Products</Link>
                  </Item>
                </Stack>
              </Item>
            </Hidden>
          </Grid>
          <Grid item xs={2} md={2}>
            <Item>
              {" "}
              <Stack direction="row" spacing={0}>
                <Item>
                  {" "}
                  <Link to="/login">SignIn</Link>
                </Item>
                <Item>
                  {" "}
                  <Link to="/signup">Register</Link>
                </Item>
              </Stack>
            </Item>
            <Item>
              <Stack direction="row" spacing={1}>
                <Button
                  onClick={handleOpen}
                  color="secondary"
                  className="btn"
                  sx={{ minWidth: "100px" }}
                >
                  <Item className="btn">
                    <ShoppingCartIcon />
                  </Item>
                  <Item className="btn">{cart.cartItems.length} Items</Item>
                </Button>
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </Container>
      <Outlet />
    </nav>
  );
}

export default Navbar;
