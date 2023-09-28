import React, {useState} from 'react';
import s from './App.module.css';
import {Settings} from "./Components/Settings/Settings";
import {Counter} from "./Components/Counter/Counter";

function App() {

    const [countNumber, setCountNumber] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
    const [startValue, setStartValue] = useState(0);

    const incrementCounter = () => {
        if (countNumber < maxValue) {
            setCountNumber(countNumber + 1);
        };

    };

    const resetCounter = () => {
        setCountNumber(startValue);
    };

    const getMaxValue = (value: number) => {
        setMaxValue(value);
    };

    const getStartValue = (value: number) => {
        setStartValue(value);
    }


    return (
        <div className={s.App}>
            <Settings maxValue={maxValue}
                      startValue={startValue}
                      getMaxValue={getMaxValue}
                      getStartValue={getStartValue}/>
            <Counter countNumber={countNumber}
                     incrementCounter={incrementCounter}
                     resetCounter={resetCounter} isMaxCount={countNumber == maxValue}/>
        </div>
    );
}

export default App;
