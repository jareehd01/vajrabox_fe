import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap child routes in the MainLayout route */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="category/:category" element={<CategoryPage />} />
          {/* Add more nested routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;