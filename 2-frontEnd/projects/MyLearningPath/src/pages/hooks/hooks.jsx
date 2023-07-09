import React from 'react';
import UseState from './useState';

export function Hooks() {
    return (
        <section className='hooks-page'>
            <article className='hooks-def'>
                <h1>Hooks</h1>
                <p>React Hooks, plainly put, are functions that let us manage the internal state of components and handle post-rendering side effects directly from our function components. Using Hooks, we can determine what we want to show the users by declaring how our user interface should look based on the state.</p>
                <p>React Hooks are a new addition in React 16.8. They let us use state and other React features without writing a class. Hooks are backwards-compatible.</p>
                <p>React offers a number of built-in Hooks. A few of these include useState(), useEffect(), useContext(), useReducer(), and useRef(). <a href='https://react.dev/reference/react' target='_blank'>See the full list</a> in the React docs.</p>
            </article>
            <UseState/>
        </section>
    )
}
