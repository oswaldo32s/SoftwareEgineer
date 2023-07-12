import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import FEWD from './pages/frontEndDev.jsx';
import SignIn from './pages/signIn.jsx';
import {Route} from 'wouter';
import './assets/styles/App.css';


function App() {


  return (
    <>
      <Header/>
      <main>
        <Route path="/" component={Home}/>
        <Route path="/courses/FEWD" component={FEWD}/>
        <Route path="/sign-up" component={SignIn}/>
      </main>
      <Footer/>
    </>
  )
}

export default App
