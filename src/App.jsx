import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Onboarding from "./pages/onboarding/onboarding";
import Login from "./pages/login/Login";
import Welcome from "./pages/welcome/welcome";
import Signup from "./pages/signup/Signup";
import SelectClub from "./pages/signup/SelectClub";
import Federation from "./pages/federation/Federation";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/select-club/:id" element={<SelectClub />} />
        <Route path="/federation/:id" element={<Federation />} />
      </Routes>
    </Box>
  );
}

export default App;
