import { BrowserRouter, Routes, Route } from "react-router-dom";
// Match the filename: landingPage.jsx
import LandingPage from "./pages/landingPage";
// Match the filename: dashboard.jsx (change 'dashBoard' to 'dashboard')
import Dashboard from "./pages/dashboard"; 
import UserManagement from "./pages/UserManagement"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-management" element={<UserManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;