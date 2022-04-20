import React, { useState } from "react";
import Modal from "./Modal";


function WriteMessage() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <React.Fragment>
            <div className="header__writeMessage helpTheme" onClick={() => { setIsOpen(true) }}>Написать письмо</div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </React.Fragment>
    )
}
export default WriteMessage;