import "./App.css";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import View from "./components/View";
import Edit from "./components/Edit"

function App() {
  console.log(Date.now())
  return (
    <div>
      {/* <h1 id="header"> TIL: </h1> */}
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Home>home page</Home>
        <Route path={"/View"} component={View} />
        <View />
        <Route path={"/Edit"} component={Edit}/>
        {/* <Route path={"/components/Facts"} component={} /> */}
        {/* <Route path={""} component={} /> */}
      </Switch>
      
    </div>
  );
}

export default App;
