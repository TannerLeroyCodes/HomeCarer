import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserHomePage from "./UserHomePage";
import LandingPage from "./LandingPage";
import LoginPage from "./Login";
import UserProviderPage from "./UserProviderPage";
import UserAccountPage from "./UserAccountPage";
import ProviderHomePage from "./ProviderHomePage";
import ErrorPage from "./ErrorPage";
import ProviderAccountPage from "./ProviderAccountPage";
import ProviderAppointmentsPage from "./ProviderAppointments";

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path={"/"} element={<LandingPage/>}/>
        <Route exact  path={"/login"} element={<LoginPage/>}/>
        <Route exact path={"/home"} element={<UserHomePage/>} />
        <Route exact path={"/providers"} element={<UserProviderPage/>} />
        <Route exact path={"/account"} element={<UserAccountPage/>} />
        <Route exact path={"/provider-home"} element={<ProviderHomePage/>} />
        <Route exact path={"/provider-appointments"} element={<ProviderAppointmentsPage/>} />
        <Route exact path={"/provider-account"} element={<ProviderAccountPage/>} /> 
        <Route exact path={"*"} element={<ErrorPage/>}/>
      </Routes>
    </Router>
  
  );
}

export default App;