import { lettersAdapter } from "./reducers";
import { sortFunc } from "./utils";
import { setUser, setLoginHint } from '../auth/index';

const lettersSelectors = lettersAdapter.getSelectors((state) => state.letters);

const selectLetterById = lettersSelectors.selectById;

const selectStatus = state => state.letters.status;

const selectLettersByBox = (state, box) => lettersSelectors.selectAll(state)
    .filter(letter => letter.box === box)
    .sort(sortFunc.bind(null, state.letters.sortBy));

export {
    selectLetterById,
    selectStatus,
    selectLettersByBox,
    setUser,
    setLoginHint,
};