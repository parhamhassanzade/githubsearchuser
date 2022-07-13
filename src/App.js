import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import History from "./pages/History";
import reactRoutes from "./utils/routs/reactRouts";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { ContextProvider } from "./context/GeneralContext";

function App() {
  return (
    <ContextProvider>

    <Router>
      <Layout>
        <Routes>
          <Route path={reactRoutes.home} element={<Home />} />
          <Route path={reactRoutes.search} element={<Search />} />
          <Route path={reactRoutes.history} element={<History />} />
        </Routes>
      </Layout>
    </Router>
    </ContextProvider>

  );
}

export default App;
