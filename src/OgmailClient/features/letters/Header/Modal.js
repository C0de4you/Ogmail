import React from "react";
import ReactDOM from 'react-dom';

const Modal = (props) => {

    const isOpen = props.isOpen;
    const Child = props.child;

    if (!isOpen) return null
    return ReactDOM.createPortal(
        <React.Fragment>
            <div className="modalBackground">
            </div>
            <div className="modal">
                {Child}
            </div>
        </React.Fragment>,
        document.body)
}

export default Modal;