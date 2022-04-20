import React, { useState } from "react";
import { Context } from "../MessagesSection";

function SortLetters() {

    const contextValue = React.useContext(Context);
    const dataBase = contextValue.dataBase;

    const [selectValue, setSelectValue] = useState('date');

    const sortFunc = ((value, previous, current) => {
        if (previous[value] > current[value]) return 1;
        else return -1;
    })

    const selectHandler = (event) => {
        const value = event.target.value;
        setSelectValue(value);
        dataBase.inBox.sort(sortFunc.bind(null, value));
        dataBase.outBox.sort(sortFunc.bind(null, value));
        dataBase.delBox.sort(sortFunc.bind(null, value));
        contextValue.setState([]);
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