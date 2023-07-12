import {useState} from 'react';
import '../assets/styles/signIn.css'

function SignIn() {

    const [signInData, setSignInData] = useState({});

    const handleChange = ({target}) => {
        const {name, value} = target;
        setSignInData(prevSignInData => ({...prevSignInData, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hey! It's not working but here is your data:\n
        First Name: ${signInData['first-name']}\n
        Last Name: ${signInData['last-name']}\n
        Username: ${signInData.username}\n
        Email: ${signInData.email}\n
        Password: ${signInData.password}\n`);
    }

    return (
        <section className="sign-in">
            <h2>Sign In</h2>
            <form className='sign-in-form' onSubmit={handleSubmit}>
                <label htmlFor='first-name'>First Name</label>
                <input 
                    onChange={handleChange}
                    type="text" 
                    placeholder="First Name" 
                    name="first-name"
                    value={signInData['first-name']}
                />
                <label htmlFor='last-name'>Last Name</label>
                <input 
                    onChange={handleChange}
                    type="text" 
                    placeholder="Last Name" 
                    name="last-name"
                    value={signInData['last-name']}
                />
                <label htmlFor="username">Username</label>
                <input 
                    onChange={handleChange}
                    type="text" 
                    placeholder="Username" 
                    name="username"
                    value={signInData.username}
                />
                <label htmlFor="email">Email</label>
                <input 
                    onChange={handleChange}
                    type="email" 
                    placeholder="Email" 
                    name="email"
                    value={signInData.email}
                />
                <label htmlFor="password">Password</label>
                <input 
                    onChange={handleChange}
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={signInData.password}
                />
                <button className="btn" htmlFor="submit">Sign Up</button>
            </form>
        </section>
    )
}

export default SignIn;