import React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import fruits from "../assets/images/category/fruits.png";
import beverages from "../assets/images/category/beverages.png";
import baby from "../assets/images/category/baby.png";
import bakery from "../assets/images/category/bakery.png";
import beauty from "../assets/images/category/beauty.png";
import Carousel from "../components/Carousel";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { loadCategories } from "../store/product/product.action";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "0px",
  paddingBottom: "30px",
}));

function Home() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const onNavigateButton = (category) => {
    navigate("/products", { state: { category: category } });
  };

  React.useEffect(() => {
    dispatch(loadCategories());
    // eslint-disable-next-line
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Sabka Bazaar</title>
      </Helmet>
      <Carousel />
      <main>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={4} md={6} className="homeproduct">
              <Item style={{ boxShadow: "none" }}>
                <img
                  src={fruits}
                  width="45%"
                  className="homeimage"
                  alt="fruits"
                />
              </Item>
            </Grid>
            <Grid item xs={8} md={6}>
              <Item style={{ boxShadow: "none" }}>
                <h2>Fruits & Vegetables</h2>
                A variety of fresh fruits and vegetables.
                <br />
                <br />
                <Button
                  onClick={() => {
                    onNavigateButton("Fruits & Vegetables");
                  }}
                  variant="contained"
                  color="error"
                >
                  Explore fruit-and-veg
                </Button>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={8} md={6}>
              <Item style={{ boxShadow: "none" }}>
                <h2>Bakery Cakes and Dairy</h2>
                The best cupcakes, cookies, cakes, pies, cheesecakes, fresh
                bread, biscotti, muffins, bagels, fresh coffee, milk and more.
                <br />
                <br />
                <Button
                  onClick={() => {
                    onNavigateButton("Bakery Cakes and Dairy");
                  }}
                  variant="contained"
                  color="error"
                >
                  Explore bakes-cakes-dairy
                </Button>
              </Item>
            </Grid>
            <Grid item xs={4} md={6} className="homeproduct">
              <Item style={{ boxShadow: "none" }}>
                <img
                  src={bakery}
                  width="45%"
                  className="homeimage"
                  alt="bakery"
                />
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={4} md={6} className="homeproduct">
              <Item style={{ boxShadow: "none" }}>
                <img
                  src={beverages}
                  width="45%"
                  className="homeimage"
                  alt="beverages"
                />
              </Item>
            </Grid>
            <Grid item xs={8} md={6}>
              <Item style={{ boxShadow: "none" }}>
                <h2>Beverages</h2>
                Our beverage department will ensure your fridge is always fully
                stocked. Shop for soda, juice, beer and more.
                <br />
                <br />
                <Button
                  onClick={() => {
                    onNavigateButton("Beverages");
                  }}
                  variant="contained"
                  color="error"
                >
                  Explore Beverages
                </Button>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={8} md={6}>
              <Item style={{ boxShadow: "none" }}>
                <h2>Beauty & Hygiene</h2>
                Buy beauty and personal care products online in India at best
                prices
                <br />
                <br />
                <Button
                  onClick={() => {
                    onNavigateButton("Beauty and Hygiene");
                  }}
                  variant="contained"
                  color="error"
                >
                  Explore beauty-hygiene
                </Button>
              </Item>
            </Grid>
            <Grid item xs={4} md={6} className="homeproduct">
              <Item style={{ boxShadow: "none" }}>
                <img
                  src={beauty}
                  width="45%"
                  className="homeimage"
                  alt="beauty"
                />
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={4} md={6} className="homeproduct">
              <Item style={{ boxShadow: "none" }}>
                <img src={baby} width="45%" className="homeimage" alt="baby" />
              </Item>
            </Grid>
            <Grid item xs={8} md={6}>
              <Item style={{ boxShadow: "none" }}>
                <h2>Baby Care</h2>
                Shop online for Baby Products, Diapers, Skin Care Products,etc.
                <br />
                <br />
                <Button
                  onClick={() => {
                    onNavigateButton("Baby Care");
                  }}
                  variant="contained"
                  color="error"
                >
                  Explore Baby
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Home;
