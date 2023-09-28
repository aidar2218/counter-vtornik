import React, {useState} from 'react';
import s from "./Display.module.css"

type DisplayPropsType = {
    countNumber: number
    isMaxCount: boolean
}

export const Display = (props: DisplayPropsType) => {


    return (
        <div className={s.display}>
            <span className={props.isMaxCount ? s.redMode : s.countSpan}>{props.countNumber}</span>
        </div>
    );
};

