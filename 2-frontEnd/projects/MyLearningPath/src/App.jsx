import React from 'react';
import './assets/App.css';
import Header from './components/header';
import Forum from './pages/forum/forum';
import {LogIn, SignUp} from './pages/LogIn-SignUp/login';
import {Hooks} from './pages/hooks/hooks';
import Giffy from './pages/giffy/giffy';
import {Link, Route} from 'wouter';

function App() {

  return (
    <>
      <Header/>
      <main>
        <Route path='/gif/:search' component={Giffy}/>
      </main>
    </>
  )
}

export default App
