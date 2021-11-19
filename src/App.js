import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Drum from "./pages/Drum";


function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
        <Route exact path="/" element={<Drum />} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
