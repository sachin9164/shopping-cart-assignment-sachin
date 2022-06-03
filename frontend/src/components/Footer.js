import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#ddd",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "0px",
  paddingLeft: "40px",
  marginTop: "0px",
}));

function Footer() {
  return (
    <footer>
      <Grid item xs={12} md={12}>
        <Item style={{ boxShadow: "none" }}>
          Copyright 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
        </Item>
      </Grid>
    </footer>
  );
}

export default Footer;
