import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MailBox from "./MailBox/MailBox";

function LettersSection() {

    return (
        <React.Fragment>
            <Header />
            <MailBox />
            <Footer />
        </React.Fragment>
    )
}

export default LettersSection;