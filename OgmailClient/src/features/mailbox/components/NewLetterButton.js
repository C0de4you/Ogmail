import React, { useState } from "react";
import Modal from "./Modal";
import NewLetter from "./NewLetter";


function NewLetterButton() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <React.Fragment>
            <div className="header__writeLetter helpTheme" onClick={() => { setIsOpen(true) }}>Написать письмо</div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
                <NewLetter setIsOpen={setIsOpen} />
            </Modal>
        </React.Fragment>
    )
}
export default NewLetterButton;