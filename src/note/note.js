import React from 'react';
import './note.css';

const note = (props) => {

    return(
        <div className="note-box">
            <h2 className="note-text">{props.text}</h2>
            <button onClick={() => props.deletenote(props.myid)}>Delete</button>
        </div>
    );
}

export default note;