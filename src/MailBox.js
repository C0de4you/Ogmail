import React from "react";
import LetterList from "./LetterList";
import { Routes, Route, Link } from "react-router-dom";
import LetterPage from "./LetterPage";
import { MailBoxContext } from "./Messages";

function MailBox() {

    const mailBoxData = React.useContext(MailBoxContext);

    const inBoxLetters = mailBoxData.inBoxLetters;
    const inBoxLettersQuantity = inBoxLetters.length ? inBoxLetters.length : '';

    const outBoxLetters = mailBoxData.outBoxLetters;
    const outBoxLettersQuantity = outBoxLetters.length ? outBoxLetters.length : '';

    const delBoxLetters = mailBoxData.delBoxLetters;
    const delBoxLettersQuantity = delBoxLetters.length ? delBoxLetters.length : '';

    const readLetters = (inBoxLetters.filter((letter) => letter.status === 'read'));
    const readLettersQuantity = readLetters.length ? readLetters.length : '';

    const unReadLetters = (inBoxLetters.filter((letter) => letter.status === 'unread'));
    const unReadLettersQuantity = unReadLetters.length ? unReadLetters.length : '';

    const setSelectedBox = mailBoxData.setSelectedBox;
    const selectedLetter = mailBoxData.selectedLetter;

    return (
        <React.Fragment>
            <div className='sideBar helpTheme'>
                <ul className="sideBar-categories">
                    <li onClick={() => setSelectedBox('inBox')}>
                        <Link to="/message/inBox" className="sideBar-categories__category">Входящие{` ${inBoxLettersQuantity}`}
                        </Link>
                    </li>
                    <li onClick={() => setSelectedBox('outBox')}>
                        <Link to="/message/outBox" className="sideBar-categories__category">Исходящие{` ${outBoxLettersQuantity}`}
                        </Link>
                    </li>
                    <li onClick={() => setSelectedBox('delBox')}>
                        <Link to="/message/delBox" className="sideBar-categories__category">Удаленные{` ${delBoxLettersQuantity}`}
                        </Link>
                    </li>
                </ul>
                <ul className="sideBar-categories">
                    <li onClick={() => setSelectedBox('inBox')}>
                        <Link to="/message/read" className="sideBar-categories__category">Прочитанные {` ${readLettersQuantity}`}
                        </Link>
                    </li>
                    <li onClick={() => setSelectedBox('inBox')}>
                        <Link to="/message/unread" className="sideBar-categories__category">Непрочитанные{` ${unReadLettersQuantity}`}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='mailList helpTheme'>
                <Routes>

                    <Route path="inBox" element={<LetterList letters={inBoxLetters} />} />

                    <Route path="outBox" element={<LetterList letters={outBoxLetters} />} />

                    <Route path="delBox" element={<LetterList letters={delBoxLetters} />} />

                    <Route path="read" element={<LetterList letters={readLetters} />} />

                    <Route path="unread" element={<LetterList letters={unReadLetters} />} />

                    <Route path={`${selectedLetter?.id}`} element={<LetterPage />} />

                </Routes>
            </div>
        </React.Fragment>
    )
}

export default MailBox;