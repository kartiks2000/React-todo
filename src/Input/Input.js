import React from 'react';
import './Input.css';

const Input = (props) => {

    var text="";

    var changed = (e) => {
        text = e.target.value;
    }

    var clicked = () => {
        props.addnote(text);
        text="";
    }

    return(
        <div className="input-box">
            <input onChange={changed} className="input-field" type="text" placeholder="Write your note here..."></input>
            <button onClick={clicked}>ADD</button>
        </div>
    );
}

export default Input; 