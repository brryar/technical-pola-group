import "./App.css";
import { CssBaseline } from "@mui/material";
import AppBar from "./components/AppBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
