import React from "react";
import Letter from "./Letter";
import { Link } from "react-router-dom";

function LetterList(props) {

    const letters = props.letters;

    return (
        <React.Fragment>
            {letters.map((letter) =>
                    <Link to={`/message/${letter.id}`} className="letterLink" key={letter.id}><Letter letter={letter} /></Link>)}
        </React.Fragment>
    )
}

export default LetterList;