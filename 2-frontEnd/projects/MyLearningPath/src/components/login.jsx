import React, { useState } from 'react';

function LogIn() {
    const userName = 'Oswaldo32s';
    const password = 'Beliveo123';
    const [logedIn, setLogedIn] = useState(false);

    const logInForm = (
        <form action='#' onSubmit={handleSubmit}>
            <label>UserName</label>
            <input type='text'/>
            <label>Password</label>
            <input type='password'/>
            <input type='submit' value='Log In' id='login-submit'/>
        </form>
    )

    const loginWelcoming = (
        <p>Hola!! {userName}, Esperemos que estes listo para aprender mucho!</p>
    )

    function handleSubmit(e) {
        const inputPassword = document.querySelector('input[type="password"]').value;
        const inputUserName = document.querySelector('input[type="text"]').value;

        if (inputPassword === password && inputUserName === userName) {
            setLogedIn(true);
        } else {
            setLogedIn(false);
            alert("Wrong UserName or Password")
        }

    }
    
    return (
        <section className='login'>
            <h1>{logedIn ? "Bienvenido!" : "Log In"}</h1>
            <div className='login-container'>
                {logedIn ? loginWelcoming : logInForm}
            </div>
        </section>
    );
}

export default LogIn;