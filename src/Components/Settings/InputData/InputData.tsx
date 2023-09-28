import React, {ChangeEvent} from 'react';
import s from "./InputData.module.css";

type InputDataPropsType = {
    maxValue: number
    startValue: number
    getMaxValue: (value: number) => void
    getStartValue: (value: number) => void
}

export const InputData = (props: InputDataPropsType) => {
    const maxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.getMaxValue(+e.currentTarget.value);
    };

    const startInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.getStartValue(+e.currentTarget.value);
    };


    return (
        <div className={s.window}>
            <div className={s.maxValueDiv}>
                max value
                <input type="number" value={props.maxValue} onChange={maxInputChangeHandler}/>
            </div>
            <div className={s.startValueDiv}>
                start value
                <input type="number" value={props.startValue} onChange={startInputChangeHandler}/>
            </div>
        </div>
    );
};

