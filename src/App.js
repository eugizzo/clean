
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPages from './components/images/logo/LandingPages';
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
