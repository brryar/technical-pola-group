import "./App.css";
import { CssBaseline } from "@mui/material";
import AppBar from "./components/AppBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import AddForm from "./views/AddForm";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddForm />} />
      </Routes>
    </>
  );
}

export default App;
