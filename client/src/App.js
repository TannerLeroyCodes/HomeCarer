import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserHomePage from "./UserHomePage";
import LandingPage from "./LandingPage";
import LoginPage from "./Login";

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path={"/"} element={<LandingPage/>}/>
        <Route exact  path={"/login"} element={<LoginPage/>}/>
        <Route exact path={"/home"} element={<UserHomePage/>} />
      </Routes>
    </Router>
  
  );
}

export default App;