import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";
import LoginPage from "./Login";

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path={"/"} element={<LandingPage/>}/>
        <Route exact  path={"/login"} element={<LoginPage/>}/>
        <Route exact path={"/home"} element={<HomePage/>} />
      </Routes>
    </Router>
  
  );
}

export default App;