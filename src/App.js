import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import History from "./pages/History";
import reactRoutes from "./utils/routs/reactRouts";

function App() {
  return (
    
      <Router>
        {/* <Layout> */}

        <Routes>
          <Route path={reactRoutes.search} element={<Search />} />
          <Route path={reactRoutes.history} element={<History />} />
        </Routes>
        {/* </Layout> */}
      </Router>

  );
}

export default App;
