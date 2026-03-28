import { Route, Routes } from "react-router-dom";
// Pages:
import HomePage from "@pages/HomePage";
// Layouts
import MainLayout from "@layouts/MainLayout";
import AuthLayout from "layout/AuthLayout";
import DashboardLayout from "layout/DashboardLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* Auth Layout */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<>login</>} />
          <Route path="signup" element={<>signup</>} />
        </Route>
        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<>properties</>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;