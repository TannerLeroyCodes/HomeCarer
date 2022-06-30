import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserHomePage from "./UserHomePage";
import LandingPage from "./LandingPage";
import LoginPage from "./Login";
import UserProviderPage from "./UserProviderPage";
import UserAccountPage from "./UserAccountPage";

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path={"/"} element={<LandingPage/>}/>
        <Route exact  path={"/login"} element={<LoginPage/>}/>
        <Route exact path={"/home"} element={<UserHomePage/>} />
        <Route exact path={"/providers"} element={<UserProviderPage/>} />
        <Route exact path={"/account"} element={<UserAccountPage/>} />
      </Routes>
    </Router>
  
  );
}

export default App;