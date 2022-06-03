import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import {
  filteredProducts,
  loadCategories,
  loadProducts,
} from "../store/product/product.action";

import { useLocation } from "react-router-dom";
import CustomPopover from "../components/Popover";
import Spinner from "../components/Spinner";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const location = useLocation();

  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const handleChange = (event, newValue) => {
    if (newValue !== 6) {
      setValue(newValue);
      dispatch(filteredProducts(event.target.innerText));
    }
  };

  React.useEffect(() => {
    if (location.state) {
      const index = product.categories
        .map((category) => {
          return category.name;
        })
        .indexOf(location.state.category);
      dispatch(filteredProducts(location.state.category));
      setValue(index);
    } else {
      dispatch(loadCategories());
      dispatch(loadProducts());
      setValue(6);
    }

    // eslint-disable-next-line
  }, [location.state]);

  return (
    <>
      <CustomPopover setValue={setValue} />
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
        }}
      >
        <div className="sidebar">
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: 1,
              borderColor: "divider",
              width: 150,
              backgroundColor: "#ddd",
            }}
          >
            {product.categories.map((category, index) => {
              return (
                <Tab
                  key={category.id}
                  className="btn"
                  label={category.name}
                  {...a11yProps(index)}
                />
              );
            })}

            <Tab
              key="key6"
              className="btn"
              id="defaultProduct"
              label=""
              {...a11yProps(6)}
            />
          </Tabs>
        </div>
        {product.status === "resolved" ? (
          <div style={{ width: 1100 }}>
            {product.categories.map((category, index) => {
              return (
                <TabPanel key={category.id} value={value} index={index}>
                  <Grid container spacing={1}>
                    {product.filteredProducts.map((product, index) => {
                      return (
                        <Grid key={product.id} item xs={12} md={6} lg={3}>
                          <ProductCard product={product} />
                        </Grid>
                      );
                    })}
                  </Grid>
                </TabPanel>
              );
            })}

            <TabPanel value={value} index={6}>
              <Grid container spacing={1}>
                {product.filteredProducts.map((product, index) => {
                  if (product.name.length > 0) {
                    return (
                      <Grid
                        className="dashboard"
                        key={product.id}
                        item
                        xs={12}
                        md={3}
                      >
                        <ProductCard product={product} />
                      </Grid>
                    );
                  } else {
                    return <h3>There are no products.</h3>;
                  }
                })}
              </Grid>
            </TabPanel>
          </div>
        ) : (
          <Spinner />
        )}
      </Box>
    </>
  );
}
