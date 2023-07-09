import React, { useState } from 'react';

export function LogIn() {
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


export function SignUp() {
    const signUpForm = (
    <div>
        <form className='sign-up-form' action='#'>
            <label>FirstName</label>
            <input type='text'/>
            <label>LastName</label>
            <input type='text'/>
            <label>UserName</label>
            <input type='text'/>
            <label>Password</label>
            <input type='password'/>
            <label>Confirm Password</label>
            <input type='password'/>
            <input type='submit' value='Sign Up' id='signup-submit'/>
        </form>
    </div>
        )


    return (
        <section className='signup'>
            {signUpForm}
        </section>
    )
}