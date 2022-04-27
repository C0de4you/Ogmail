import React, { useState } from "react";
import AddLetter from "./AddLetter";
import Modal from "./Modal";


function AddLetterButton() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <React.Fragment>
            <div className="header__writeLetter helpTheme" onClick={() => { setIsOpen(true) }}>Написать письмо</div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
                <AddLetter setIsOpen={setIsOpen} />
            </Modal>
        </React.Fragment>
    )
}
export default AddLetterButton;