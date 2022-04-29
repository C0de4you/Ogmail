import { createAction } from "@reduxjs/toolkit";
import { LETTER } from "./types";
import { lettersSlice } from "./reducers";

const { sortLetters, setLetters, setStatus, addLetter, removeLetter, updateLetter } = lettersSlice.actions;

const getLettersFromServer = createAction(LETTER.GET);

const postLetterOnServer = createAction(LETTER.POST, (sender, theme, message) => {
    return {
        payload: {
            date: (new Date()).toLocaleString(),
            sender,
            theme,
            message,
            status: 'read',
            box: 'outBox',
        }
    }
});

const patchLetterOnServer = createAction(LETTER.PATCH, (id, property, value) => {
    return { payload: { id, property, value } }
});

const deleteLetterOnServer = createAction(LETTER.DELETE, (id) => {
    return { payload: { id } }
});

export {
    sortLetters,
    setLetters,
    setStatus,
    addLetter,
    removeLetter,
    updateLetter,
    getLettersFromServer,
    postLetterOnServer,
    patchLetterOnServer,
    deleteLetterOnServer,
};
