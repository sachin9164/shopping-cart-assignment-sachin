import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Login from "./routes/Login";
import { ProtectedRoute } from "./routes/PrivateRoute";
import Products from "./routes/Products";
import SignUp from "./routes/SignUp";

const theme = createTheme({
  typography: {
    fontFamily: "Dosis ",
  },
  palette: {
    type: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
      disabled: "#000000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/products"
              element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>

        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
