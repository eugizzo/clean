
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import LandingPages from './components/LandingPages';
import Header from './layout/Header'

function App() {
  return (
    <div >
    
    <Header className="absolute z-30"/>

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
