import React from "react";
import { Routes, Route } from "react-router-dom";
import LetterPage from "./LetterPage";
import SideBar from "./MailBoxSideBar";
import Loading from "./Loading";

const LetterList = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(
            import("./LetterList")), 3000)
    })
});

function MailBox() {

    return (
        <React.Fragment>

            <SideBar />

            <div className='mailList helpTheme'>
                <React.Suspense fallback={<Loading />}>
                    <Routes>

                        <Route path=":Box" element={<LetterList />} />

                        <Route path="id:id" element={<LetterPage />} />

                    </Routes>
                </React.Suspense>
            </div>
        </React.Fragment>
    )
}

export default MailBox;