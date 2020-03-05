import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



{/* PAGINAS WEBS - ROUTES */}
{/* MAIN HOME */}
import Home  from './components/Home/Home';
import HomeLogged  from './components/Home/HomeLogged';

{/* USER */}
import Login from './components/User/Login';
import Register from './components/User/Register';
import Dashboard from './components/User/Dashboard';

{/* MODULES */}
import Aprenentatge from './components/Modules/Aprenentatge/Aprenentatge';
import Practica from './components/Modules/Practica/Practica';
import Buscador from './components/Modules/Buscador/Buscador';
import About from './components/Modules/About/About';


{/* COMPONENTES */}
import AppBar from './components/NavBar/AppBar';
import AppBarSecondary from './components/NavBar/AppBarSecondary';
import AppBarLogged from './components/NavBar/AppBarLogged';
import Footer from './components/NavBar/Footer';

{/* Aprenentatge */}
import llicons from './components/Modules/Aprenentatge/Llicons/llicons';
import llicoExerciciTemplate from './components/Modules/Aprenentatge/Llicons/llicoExerciciTemplate';
import llicoExplicacioTemplate from './components/Modules/Aprenentatge/Llicons/llicoExplicacioTemplate';
import Jocs from './components/Modules/Aprenentatge/Jocs/Jocs';

{/* PRACTICA */}
import Camera from './components/Modules/Practica/Camera';
import Voz from './components/Modules/Practica/Voz';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }

  componentDidMount() {
    
    fetch('/api/home')
      .then(response => response.json())
      .then(logged => this.setState({ logged: logged.logged }));
  }

  render() {
                       //USUARIO LOGEADO CORRECTAMENTE
    if(this.state.logged == true){
      return (
        <div>
          <React.Fragment>
          <Router>
          {/* TOOLBAR  - BARRA DE NAVEGACION  PRINCIPAL*/}
          <AppBarLogged/>
          {/* TOOLBAR  - BARRA DE NAVEGACION  SECUNDARIA LOGGEADO*/}
          <AppBarSecondary/>  
            <Switch>
                  <Route exact path='/' component={HomeLogged} />
                  {/* RUTAS USUARIO*/}
                  <Route path='/login' component={Login} />
                  <Route path='/register' component={Register} />
                  <Route path='/dashboard' component={Dashboard} />
                  {/* RUTAS MODULOS*/}
                  <Route path='/Aprenentatge' component={Aprenentatge} />
                  <Route path='/practica' component={Practica} />
                  <Route path='/buscador' component={Buscador} />
                  <Route path='/about' component={About} />
                  {/* RUTAS SUBMODULOS*/}
                  <Route path='/llicons' component={llicons} /> 
                  <Route path='/llico/' component={llicoExplicacioTemplate} />
                  <Route path='/exercici/' component={llicoExerciciTemplate} />
                  <Route path='/jocs' component={Jocs} />
                  <Route path='/camera' component={Camera} />
                  <Route path='/voz' component={Voz} />
            </Switch>
            </Router>
          <Footer/>
        </React.Fragment>
        </div>
    );
    }else{ 
                            //USUARIO NO LOGEADO
      return (
        <div>
          <React.Fragment>
          <Router>
          {/* TOOLBAR  - BARRA DE NAVEGACION  PRINCIPAL*/}
          <AppBar/>
           {/* TOOLBAR  - BARRA DE NAVEGACION  SECUNDARIA NO LOGEADO*/}
          <AppBarSecondary/> 
            <Switch>
                  <Route exact path='/' component={Home} />
                   {/* RUTAS USUARIO*/}
                  <Route path='/login' component={Login} />
                  <Route path='/register' component={Register} />
                  {/* RUTAS MODULOS*/}
                  <Route path='/aprenentatge' component={Aprenentatge} />
                  <Route path='/practica' component={Practica} />
                  <Route path='/buscador' component={Buscador} />
                  <Route path='/about' component={About} />
                  {/* RUTAS SUBMODULOS*/}
                  <Route path='/llicons' component={llicons} />
                  <Route path='/llico/' component={llicoExplicacioTemplate} />
                  <Route path='/exercici/' component={llicoExerciciTemplate} />
                  <Route path='/jocs' component={Jocs} />
                  <Route path='/camera' component={Camera} />
                  <Route path='/voz' component={Voz} />
            </Switch>
            </Router>
          <Footer/>
        </React.Fragment>
        </div>
    );
    } 
  }
}

export default App;