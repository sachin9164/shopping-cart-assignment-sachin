import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import lowestprice from "../assets/images/lowest-price.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, updateTotal } from "../store/cart/cart.slice";

const style = {
  position: "absolute",
  top: "50%",
  left: "81%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

export default function Cart({ setOpen, open, cartItemsSize, cartTotal }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="mymodal">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <strong> My Cart {cartItemsSize} Items </strong>
          </Typography>
          {cartItemsSize > 0 ? (
            <div style={{ height: 355, overflowY: "scroll" }}>
              {cart.cartItems.map((cartItem) => {
                return (
                  <Grid key={cartItem.id} container spacing={2}>
                    <Grid
                      item
                      xs={2}
                      md={2}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={cartItem.imageURL}
                        width="100%"
                        height="55%"
                        alt="Main Logo"
                      />
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <h5>{cartItem.name}</h5>
                      <Button
                        onClick={() => {
                          dispatch(
                            addItem({
                              ...cartItem,
                              ...{ quantity: cartItem.quantity - 1 },
                            })
                          );
                          dispatch(updateTotal());
                        }}
                        sx={{ minWidth: "0px" }}
                      >
                        -
                      </Button>{" "}
                      {cartItem.price}
                      <Button
                        onClick={() => {
                          dispatch(
                            addItem({
                              ...cartItem,
                              ...{ quantity: cartItem.quantity + 1 },
                            })
                          );
                          dispatch(updateTotal());
                        }}
                        sx={{ minWidth: "0px" }}
                      >
                        +
                      </Button>{" "}
                      × {cartItem.quantity}
                    </Grid>
                    <Grid
                      item
                      sx={{ display: "flex", alignItems: "flex-end " }}
                      xs={2}
                      md={2}
                    >
                      Rs.{cartItem.price * cartItem.quantity}
                      <Button
                        onClick={() => {
                          dispatch(deleteItem(cartItem.id));
                          dispatch(updateTotal());
                        }}
                        sx={{ backgroundColor: "white !important" }}
                      >
                        <DeleteIcon
                          style={{ color: "red", cursor: "pointer" }}
                        />
                      </Button>
                    </Grid>
                  </Grid>
                );
              })}
            </div>
          ) : (
            <h3>No Items in Cart</h3>
          )}

          <Grid container spacing={1}>
            <Grid item md={4}>
              <img src={lowestprice} width="100%" alt="Main Logo" />
            </Grid>
            <Grid item sx={{ display: "flex", alignItems: "center" }} md={8}>
              You wont find it cheaper anywhere
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="error"
            fullWidth
            sx={{
              position: "fixed",
              top: "470px",
              left: "-5px",
              margin: "5px",
            }}
          >
            Proceed to Checkout Rs.{cartTotal}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
