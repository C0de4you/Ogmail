import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from 'react-redux'
import LoadingPage from "./LoadingPage";
import EmptyPage from "./EmptyPage";
import LogOutButton from "./LogOutButton";
import NewLetterButton from "./NewLetterButton";
import SortLettersSelector from "./SortLettersSelector";
import { getLettersFromServer } from "../actions";
import { selectStatus } from "../selectors";
import FindSenderReduxField from "./FindSenderField";

function MailBoxPage() {

    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (status === 'idle') {
            dispatch(getLettersFromServer());
        }
    }, [status, dispatch])

    let content = null;

    if (status === 'pending') {
        content = <LoadingPage />
    } else if (status === 'fullfield') {
        content = <Outlet />
    } else {
        content = <EmptyPage />
    }

    return (
        <React.Fragment>

            <div className='header mainTheme'>
                <p className="header__logo">OGmail</p>
                <LogOutButton />
                <NewLetterButton />
                <SortLettersSelector />
                <FindSenderReduxField />
            </div>

            <div className="mailbox__container mainTheme">
                <SideBar />
                <div className='mailBox helpTheme'>
                    {content}
                </div>
            </div>

            <div className='footer mainTheme'>
                <p>Все права защищены</p>
            </div>

        </React.Fragment>
    )
}

export default MailBoxPage;