
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import LandingPages from './components/LandingPages';


function App() {
  return (
    <div >
    

<BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages />}>
        
        </Route>
      </Routes>
   </BrowserRouter>
    </div>
  );
}
export default App;
