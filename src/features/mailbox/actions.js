import { createAction, nanoid } from "@reduxjs/toolkit";
import { LETTER } from "./types";
import { lettersSlice } from "./reducers";
import { AUTH } from "../auth/index";

const { sortLetters, setLetters, setStatus, addLetter, removeLetter, updateLetter } = lettersSlice.actions;

const getLettersFromServer = createAction(LETTER.GET);

const postLetterOnServer = createAction(LETTER.POST, (sender, subject, message) => {
    return {
        payload: {
            date: (new Date()).toLocaleString(),
            sender,
            subject,
            message,
            status: 'read',
            box: 'outBox',
            id: nanoid(10).toString()
        }
    }
});

const patchLetterOnServer = createAction(LETTER.PATCH, (id, property, value) => {
    return { payload: { id, property, value } }
});

const deleteLetterOnServer = createAction(LETTER.DELETE, (id) => {
    return { payload: { id } }
});

const logOut = createAction(AUTH.LOGOUT)

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
    logOut
};
