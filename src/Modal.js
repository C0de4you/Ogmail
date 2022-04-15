import React from "react";
import ReactDOM from 'react-dom';
import NewLetter from "./NewLetter";

const Modal = (props) => {

    const isOpen = props.isOpen;
    const setIsOpen = props.setIsOpen;

    if (!isOpen) return null
    return ReactDOM.createPortal(
        <React.Fragment>
            <div className="modalBackground">
            </div>
            <div className="modal">
                <NewLetter setIsOpen={setIsOpen} />
            </div>
        </React.Fragment>,
        document.body)
}

export default Modal;