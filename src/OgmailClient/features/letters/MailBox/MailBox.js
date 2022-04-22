import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LetterPage from "./LetterPage";
import SideBar from "./SideBar";
import Loading from "./Loading";
import LetterList from "./LetterList"
import { useDispatch, useSelector } from 'react-redux'
import { fetchLetters } from '../lettersSlice'

function MailBox() {

    const status = useSelector(state => state.letters.status);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchLetters())
        }
    }, [status, dispatch])

    let content = null;

    if (status === 'pending') {
        content = <Loading />
    } else if (status === 'fullfield') {
        content =
            <Routes>
                <Route path=":Box" element={<LetterList />} />
                <Route path="id:id" element={<LetterPage />} />
            </Routes>
    }

    return (
        <React.Fragment>
            <SideBar />
            <div className='mailBox helpTheme'>
                {content}
            </div>
        </React.Fragment>
    )
}

export default MailBox;