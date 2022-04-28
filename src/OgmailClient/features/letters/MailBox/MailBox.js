import React from "react";
import { Routes, Route } from "react-router-dom";
import LetterPage from "./LetterPage";
import SideBar from "./SideBar";
import Loading from "./Loading";
import LetterList from "./LetterList"
import { useDispatch, useSelector } from 'react-redux'
import { getLettersAction, selectStatus } from '../lettersSlice'

function MailBox() {

    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (status === 'idle') {
            dispatch(getLettersAction());
        }
    }, [status, dispatch])

    let content = null;

    if (status === 'pending') {
        content = <Loading />
    } else if (status === 'fullfield') {
        content =
            <Routes>
                <Route path=":Box" element={<LetterList />} />
                <Route path="letter/:id" element={<LetterPage />} />
            </Routes>
    } else {
        content = <div className="emptyMailBox"><p className="emptyMailBox__text">Сервер не отвечает :(</p></div>
    }

    return (
        <div className="mailbox__container mainTheme">
            <SideBar />
            <div className='mailBox helpTheme'>
                {content}
            </div>
        </div>
    )
}

export default MailBox;