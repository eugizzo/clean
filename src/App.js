
import Header from './layout/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPages from './components/images/logo/LandingPages';
function App() {
  return (
    <div >
    
<Header />

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
