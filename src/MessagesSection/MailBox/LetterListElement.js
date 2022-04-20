import React from "react";
import { Link } from "react-router-dom";

function Letter(props) {

    const letter = props.letter;

    return (
        <Link className="letterLink" to={`/messages/id${letter.id}`}>
            <div className={`letter ${letter.status}`}>
                <p className="letter__from">От:{` ${letter.sender}`}</p>
                <p className="letter__date">{letter.date}</p>
                <p className="letter__theme">Тема:{` ${letter.theme}`}</p>
                <p className="letter__message">{letter.message}</p>
            </div>
        </Link>
    )
}

export default Letter;