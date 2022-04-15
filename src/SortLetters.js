import React, { useState } from "react";
import { HeaderContext } from "./Messages";

function SortLetters() {

    const headerData = React.useContext(HeaderContext);

    const sortLetters = headerData.sortLetters;
    const [selectValue, setSelectValue] = useState('date');

    const selectHandler = (event) => {
        setSelectValue(event.target.value);
        sortLetters(event.target.value);
    }

    return (
        <div className="header-sortMessage helpTheme">
            <p>Сортировать по:</p>
            <select className="header-sortMessage__selector helpTheme" value={selectValue} onChange={selectHandler}>
                <option value="sender">Отправителю</option>
                <option value="theme">Теме</option>
                <option value="date">Дате</option>
            </select>
        </div>
    )
}

export default SortLetters;