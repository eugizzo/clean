
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Form from "./components/Form";
import LandingPages from './components/LandingPages';


function App() {
  return (
    <div >
    

<BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages />}>
        <Route path="/form" element={<Form />} />

        </Route>
      </Routes>
   </BrowserRouter>

    </div>
  );
}
export default App;
