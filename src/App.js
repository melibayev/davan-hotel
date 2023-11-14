import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeP from "./pages/HomeP";
import Layout from './components/layout/index'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomeP />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
