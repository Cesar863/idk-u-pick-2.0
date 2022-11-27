import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { Loading } from "./pages/Loading";
import Results from "./pages/Results";
  
function App() {
    
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/results" element={<Results/>}/>
        <Route exact path="/loading" element={<Loading/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}
  
export default App;
