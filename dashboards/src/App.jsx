import React,{Component} from "react"
import Header  from "./components/Header";
import Sidebar from "./components/Sidebar"
import {Switch,Route} from "react-router-dom";
import Home from "./pages/Home"
import Usuarios from "./pages/Usuarios"
import Productos from "./pages/Productos"
import DetallesUsuario from "./pages/DetallesUsuario"
import DetalleProducto from "./pages/DetalleProducto"
import './App.css';

class App extends Component{
  render(){
    return (
      <>
        <Header />
        <div className="flex">
        <Sidebar/>
        <Switch className="content">
          <Route exact path="/" component={Home}/>
          <Route exact path="/usuarios" component={Usuarios}/>
          <Route exact path="/productos" component={Productos}/>
          <Route exact path="/detallesUsuario/:id" component={DetallesUsuario}/>
          <Route exact path="/detalleProducto/:id" component={DetalleProducto}/>
        </Switch>
        </div>
      </>
    )
  }
}
export default App;