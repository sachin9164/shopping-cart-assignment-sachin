import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { addItem, updateTotal } from "../store/cart/cart.slice";
import { Grow } from "@mui/material";

export default function ProductCard({ product }) {
  const [selectedProduct, setSelectedProduct] = React.useState();
  const [quantity, setQuantity] = React.useState(1);

  React.useEffect(() => {
    setSelectedProduct(product);
    // eslint-disable-next-line
  }, []);

  const dispatch = useDispatch();
  const onBuyClick = () => {
    setQuantity(quantity + 1);
    dispatch(addItem({ ...selectedProduct, ...{ quantity: quantity } }));
    dispatch(updateTotal());
  };
  return (
    <>
      <Grow in={true}>
        <Card sx={{ maxWidth: 300, padding: "3px", marginBottom: "5px" }}>
          <div style={{ height: 60 }}>
            <h3>{product.name}</h3>
          </div>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={6} md={6} lg={12}>
                <CardMedia
                  component="img"
                  alt={product.name}
                  height="140"
                  image={product.imageURL}
                />
              </Grid>
              <Grid
                item
                xs={6}
                md={6}
                lg={12}
                style={{ backgroundColor: "#dddddd" }}
              >
                <Typography
                  variant="body2"
                  component={"div"}
                  color="text.secondary"
                  style={{ overflow: "hidden", height: 100 }}
                >
                  {product.description}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              onClick={onBuyClick}
              size="small"
              fullWidth
              style={{ color: "white" }}
            >
              BuyNow @ Rs.{product.price}
            </Button>
          </CardActions>
        </Card>
      </Grow>
    </>
  );
}
