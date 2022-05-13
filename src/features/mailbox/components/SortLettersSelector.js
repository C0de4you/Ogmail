import React from "react";
import { useDispatch } from 'react-redux'
import { sortLetters } from "../actions";

function SortLettersSelector() {

    const dispatch = useDispatch();

    const [selectValue, setSelectValue] = React.useState('date');

    const selectHandler = (event) => {
        const value = event.target.value;
        setSelectValue(value);
        dispatch(sortLetters(value))
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

export default SortLettersSelector;