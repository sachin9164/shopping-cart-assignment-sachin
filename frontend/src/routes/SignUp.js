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

function SignUp() {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = React.useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setUserData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,}$/;
    return re.test(String(password));
  };

  const handleSubmitClick = (e) => {
    const { confirmPassword, password, email, firstName, lastName } = userData;
    if (
      !confirmPassword.length > 6 &&
      password.length > 6 &&
      email.length > 4 &&
      firstName.length > 4 &&
      lastName.length > 4
    ) {
      setError("Make sure you have entered everything");
      alert(error);
    } else if (!validateEmail(userData.email)) {
      setError("Invalid Email");
      alert(error);
    } else if (!validatePassword(userData.password)) {
      setError(
        "Password must be at least 6 chars long and an Uppercase and Lowercase letter without space"
      );
      alert(error);
    } else if (validateEmail && validatePassword) {
      alert("Welcome ");
      navigate("/login");
    }
  };
  console.log(userData);
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SignUp | Sabka Bazaar</title>
      </Helmet>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Item style={{ boxShadow: "none" }}>
              <h1>SignUp</h1>
              We do not share your personal details
            </Item>
          </Grid>
          <Grid item xs={12} md={5}>
            <Item style={{ boxShadow: "none" }}>
              <TextField
                id="firstName"
                label="First Name"
                variant="standard"
                onChange={handleChange}
                fullWidth
              />
              <br />
              <br />
              <TextField
                id="lastName"
                label="Last Name"
                variant="standard"
                onChange={handleChange}
                fullWidth
              />
              <br />
              <br />
              <TextField
                id="email"
                label="Email"
                variant="standard"
                onChange={handleChange}
                fullWidth
              />
              <br />
              <br />
              <TextField
                id="password"
                label="Password"
                variant="standard"
                onChange={handleChange}
                fullWidth
              />
              <br />
              <br />
              <TextField
                id="confirmPassword"
                label="Confirm Password"
                variant="standard"
                onChange={handleChange}
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
                SignUp
              </Button>
            </Item>
            {error !== null && <h5 style={{ color: "red" }}>! {error}</h5>}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default SignUp;
