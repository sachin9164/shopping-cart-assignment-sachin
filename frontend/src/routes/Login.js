import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  borderRadius: "0px",
}));

function Login() {
  const navigate = useNavigate();

  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState(null);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,}$/;
    return re.test(String(password));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id);
    setUserData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();

    if (!validateEmail(userData.email)) {
      setError("Invalid Email");
      alert(error);
    } else if (!validatePassword(userData.password)) {
      setError(
        "Password must be at least 6 chars long and an Uppercase and Lowercase letter without space"
      );
      alert(error);
    } else if (validateEmail && validatePassword) {
      // No errors.
      setError(null);
      alert("Welcome ");
      sessionStorage.setItem("userEmail", userData.email);
      navigate("/products");
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Login to India's biggest online store for  Beauty & Personal Care, Grocery and more! Find the largest selection from all brands at the lowest prices in India."
        />
        <title>Login | Sabka Bazaar</title>
        <link rel="canonical" href="http://localhost:3000/login" />
      </Helmet>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Item style={{ boxShadow: "none" }}>
              <h1>Login</h1>
              Get Access to your Orders, Wishlist and Recommendations
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item style={{ boxShadow: "none" }}>
              <form onSubmit={handleSubmitClick}>
                <TextField
                  id="email"
                  label="Email"
                  variant="standard"
                  type="email"
                  onChange={handleChange}
                  fullWidth
                />
                <br />
                <br />
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  value={userData.password}
                  onChange={handleChange}
                  variant="standard"
                  fullWidth
                />
                <br />
                <br />
                <br />
                <Button
                  onClick={handleSubmitClick}
                  variant="contained"
                  color="error"
                  fullWidth
                >
                  Login
                </Button>
              </form>
            </Item>
            {error !== null && <h5 style={{ color: "red" }}>! {error}</h5>}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Login;
