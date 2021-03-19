//imports for diff components
import NavBar from "./components/NavBar";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import View from "./components/View";
import Edit from "./components/Edit";
import SinglePost from "./components/SinglePost";


function App() {
//routes to pages and navbar 
//Browser Router lives in index.js
  return (
    <div>
      
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/View/:singlePostID"} component={SinglePost} />
        <Route path={"/View"} component={View} />
        <Route path={"/Edit"} component={Edit} />
      </Switch>
    </div>
  );
}

export default App;
