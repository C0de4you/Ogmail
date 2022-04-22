import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MailBox from "./MailBox/MailBox";

function LettersSection() {

    return (
        <React.Fragment>
            <Header />
            <div className="mailbox__container mainTheme">
                <MailBox />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default LettersSection;