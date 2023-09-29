import React, {useState} from 'react';
import s from './App.module.css';
import {Settings} from "./Components/Settings/Settings";
import {Counter} from "./Components/Counter/Counter";

type ValuesDataType = {
    countNumber: number
    maxValue: number
    startValue: number
}

type ButtonsDataType = {
    increment: boolean
    reset: boolean
    set: boolean
}

function App() {

    // const [countNumber, setCountNumber] = useState(0);
    // const [maxValue, setMaxValue] = useState(5);
    // const [startValue, setStartValue] = useState(0);

    const [valuesData, setValuesData] = useState <ValuesDataType> ({
        countNumber: 0,
        maxValue: 5,
        startValue: 0
    });

    const [disableData, setDisableData] = useState <ButtonsDataType> ({
        increment: valuesData.countNumber < valuesData.maxValue ? false : true,
        reset: false,
        set: false
    });



    const incrementCounter = () => {
        if (valuesData.countNumber < valuesData.maxValue) {
            setValuesData({...valuesData, countNumber: valuesData.countNumber + 1});
        }
    };

    const resetCounter = () => {
        setValuesData({...valuesData, countNumber: valuesData.startValue});
        setDisableData({...disableData, increment: false});
    };

    const getValues = (max: number, start: number) => {
        setValuesData({...valuesData, maxValue: max, startValue: start});
    };






    return (
        <div className={s.App}>
            <Settings maxValue={valuesData.maxValue}
                      startValue={valuesData.startValue}
                      getValues={getValues} />
            <Counter countNumber={valuesData.countNumber}
                     incrementCounter={incrementCounter}
                     resetCounter={resetCounter}
                     isMaxCount={valuesData.startValue == valuesData.maxValue}

            />
        </div>
    );
}

export default App;
