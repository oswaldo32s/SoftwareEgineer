import React from "react";
import {ColorChange} from './colorChange';
import Questionare from "./questionare";
import questions from "../../data/questions";
import ListSelection from "./listSelection";

function UseState() {
    return (
        <section className="use-state">
            <article className='use-state-def'>
                <h2>Use State Hook</h2>
                <p>Here you should see the definition of Use State.</p>
            </article>
            <section className='use-state-examples'>
                <ColorChange/>
                <Questionare questions={questions}/>
                <ListSelection/>
            </section>
        </section>
    )
}

export default UseState;