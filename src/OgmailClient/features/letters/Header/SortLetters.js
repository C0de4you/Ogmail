import React, { useState } from "react";
import { sortLetters } from "../lettersSlice"
import { useDispatch } from 'react-redux'

function SortLetters() {

    const dispatch = useDispatch();

    const [selectValue, setSelectValue] = useState('date');

    const selectHandler = (event) => {
        const value = event.target.value;
        setSelectValue(value);
        dispatch(
            sortLetters(value),
        )
    }

    return (
        <div className="header-sortLetters helpTheme">
            <p>Сортировать по:</p>
            <select className="header-sortLetters__selector helpTheme" value={selectValue} onChange={selectHandler}>
                <option value="sender">Отправителю</option>
                <option value="theme">Теме</option>
                <option value="date">Дате</option>
            </select>
        </div>
    )
}

export default SortLetters;