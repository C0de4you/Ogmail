import React from "react";
import Header from "./Header"
import MailBox from "./MailBox"
import Footer from "./Footer"
import { exampleArray } from "./exampleArray";

export const MailBoxContext = React.createContext();
export const HeaderContext = React.createContext();

function Message() {

    const [inBoxLetters, setInBoxLetters] = React.useState([]);
    const [outBoxLetters, setOutBoxLetters] = React.useState([]);
    const [delBoxLetters, setDelBoxLetters] = React.useState([]);

    const [selectedLetter, setSelectedLetter] = React.useState(null);
    const [selectedBox, setSelectedBox] = React.useState('inBox');

    React.useEffect(() => {
        setInBoxLetters(exampleArray); // иммитация подгрузки с сервера
    }, []);


    const sortFunc = (value, previous, current) => {
        if (previous[value] > current[value]) return 1;
        else return -1;
    }

    const sortLetters = (value) => {
        setInBoxLetters([...inBoxLetters.sort(sortFunc.bind(null, value))]);
        setOutBoxLetters([...outBoxLetters.sort(sortFunc.bind(null, value))]);
        setDelBoxLetters([...delBoxLetters.sort(sortFunc.bind(null, value))]);
    }

    const addLetter = (letter) => {
        const selectElement = document.querySelector('.header-sortMessage__selector');
        const value = selectElement instanceof HTMLSelectElement ? selectElement.value : "";

        if (outBoxLetters.length) {
            letter.id = outBoxLetters.length ? outBoxLetters[outBoxLetters.length - 1].id + 1 : 0;
        } else {
            letter.id = inBoxLetters.length ? inBoxLetters[inBoxLetters.length - 1].id + 1 : 0;
        }

        setOutBoxLetters([...outBoxLetters, letter].sort(sortFunc.bind(null, value)));
    }

    const deleteLetter = () => {

        if (selectedBox === 'inBox') {
            const index = inBoxLetters.indexOf(selectedLetter);
            inBoxLetters.splice(index, 1);
            setInBoxLetters(inBoxLetters);
            setDelBoxLetters([...delBoxLetters, selectedLetter]);

        } else if (selectedBox === 'outBox') {
            const index = outBoxLetters.indexOf(selectedLetter);
            outBoxLetters.splice(index, 1);
            setOutBoxLetters(outBoxLetters);
            setDelBoxLetters([...delBoxLetters, selectedLetter]);

        } else if (selectedBox === 'delBox') {
            const index = delBoxLetters.indexOf(selectedLetter);
            delBoxLetters.splice(index, 1);
            setDelBoxLetters([...delBoxLetters]);
        }
    }

    const changeReadStatus = () => {

        if (selectedBox === 'inBox') {
            const index = inBoxLetters.indexOf(selectedLetter);
            inBoxLetters[index].status = 'read';
            setInBoxLetters([...inBoxLetters]);
        }
    }

    const mailBoxData = {
        inBoxLetters: inBoxLetters,
        outBoxLetters: outBoxLetters,
        delBoxLetters: delBoxLetters,
        setSelectedLetter: setSelectedLetter,
        selectedLetter: selectedLetter,
        setSelectedBox: setSelectedBox,
        deleteLetter: deleteLetter,
        changeReadStatus: changeReadStatus,
        selectedBox: selectedBox,
    }

    const headerData = {
        addLetter: addLetter,
        sortLetters: sortLetters,
    }

    return (
        <React.Fragment>
            <HeaderContext.Provider value={headerData} >
            <Header />
            </HeaderContext.Provider>
            <div className="container mainTheme">
                <MailBoxContext.Provider value={mailBoxData} >
                    <MailBox />
                </MailBoxContext.Provider>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Message;