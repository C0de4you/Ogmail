import mailBoxSaga from "./sagas";
import mailboxReducer from "./reducers";
import MailBoxPage from "./components/MailBoxPage";
import LetterPage from './components/LetterPage'
import LetterList from "./components/LetterList";
import { updateLetter, removeLetter } from "./actions";
import { LETTER } from "./types";
import { selectLetterById } from "./selectors";
import { AUTH } from '../auth/index'

export {
    mailBoxSaga,
    MailBoxPage,
    LetterPage,
    LetterList,
    updateLetter,
    removeLetter,
    LETTER,
    selectLetterById,
    AUTH
}

export default mailboxReducer;