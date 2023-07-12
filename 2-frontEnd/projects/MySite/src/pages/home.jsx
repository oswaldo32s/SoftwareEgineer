import React from "react";
import ListOfCourses from "../components/ListOfCourses";
import "../assets/styles/home.css";

function Home() {

  return(
    <section className="home">
      <figure className="home-img">
        <h1>My Site!</h1>
        <p>Bienvenido a mi pagina web!</p>
        <p>Por el momento no se exactamente que puedo agregar en esta pagina, pero una vez que tenga una idea aqui lo podras ver</p>
      </figure>
      <ListOfCourses/>
    </section>
  )
}

export default Home;