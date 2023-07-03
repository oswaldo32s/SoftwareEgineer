import React from 'react';
import './assets/App.css';
import Header from './components/header';
import Forum from './pages/forum/forum';
import LogIn from './pages/login/login';

function App() {

  return (
    <>
      <Header/>
      <main>
      <Forum/>
      </main>
    </>
  )
}

export default App
