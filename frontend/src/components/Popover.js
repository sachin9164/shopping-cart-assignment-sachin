import * as React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { filteredProducts } from "../store/product/product.action";

export default function CustomPopover({ setValue }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [popoverText, setPopoverText] = React.useState("Fruits & Vegetables");
  const category = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleListClick = (index, name) => {
    setPopoverText(name);
    setValue(Number(index));
    dispatch(filteredProducts(name));
  };
  return (
    <div className="popover" style={{ display: "none" }}>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        id="popoverbtn"
      >
        {popoverText}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{ width: "100%", left: "0px" }}
      >
        <List>
          {category.categories.map((category, index) => {
            return (
              <ListItem disablePadding key={category.id}>
                <ListItemButton
                  onClick={() => {
                    handleListClick(index, category.name);
                  }}
                >
                  <ListItemText primary={category.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Popover>
    </div>
  );
}
