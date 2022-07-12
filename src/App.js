import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import History from "./pages/History";
import reactRoutes from "./utils/routs/reactRouts";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={reactRoutes.home} element={<Home />} />
          <Route path={reactRoutes.search} element={<Search />} />
          <Route path={reactRoutes.history} element={<History />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
