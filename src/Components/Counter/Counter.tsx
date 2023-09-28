import React from 'react';
import s from "./Counter.module.css"
import {Display} from "./Display/Display";
import {UniversalButton} from "../UniversalButton/UniversalButton";

type CounterPropsType = {
    countNumber: number
    incrementCounter: () => void
    resetCounter: () => void
    isMaxCount: boolean
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.main}>
            <Display countNumber={props.countNumber} isMaxCount={props.isMaxCount}/>
            <div className={s.windowForButtons}>
                <UniversalButton title={"INC"}
                                 callback={props.incrementCounter}/>
                <UniversalButton title={"RESET"}
                                 callback={props.resetCounter}/>
            </div>
        </div>
    );
};

