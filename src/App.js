import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddBreakFast from "./components/AddBreakFast/AddBreakFast";
import AddDinner from "./components/AddDinner/AddDinner";
import AddLunch from "./components/AddLunch/AddLunch";
import Admin from "./components/Admin/Admin";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import Manage from "./components/Manage/Manage";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <MainHeader></MainHeader>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/order"></Route>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/breakFast">
              <AddBreakFast></AddBreakFast>
            </Route>
            <Route path="/lunch">
              <AddLunch></AddLunch>
            </Route>
            <Route path="/dinner">
              <AddDinner></AddDinner>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/manage">
              <Manage></Manage>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
