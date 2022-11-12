import React,{Component} from "react"
import Navbar  from "./components/Navbar";
import Sidebar from "./components/Sidebar"
import {Switch,Route} from "react-router-dom";
import Home from "./pages/Home"
import Usuarios from "./pages/Usuarios"
import Productos from "./pages/Productos"
import './App.css';

class App extends Component{
  render(){
    return (
      <>
        <Navbar />
        <div className="flex">
        <Sidebar/>
        <Switch className="content">
          <Route exact path="/" component={Home}/>
          <Route exact path="/Usuarios" component={Usuarios}/>
          <Route exact path="/Productos" component={Productos}/>
        </Switch>
        </div>
      </>
    )
  }
}
export default App;