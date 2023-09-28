import React from 'react';
import s from "./UniversalButton.module.css"

type UniversalButtonPropsType = {
    title: string
    callback: () => void
}

export const UniversalButton = (props: UniversalButtonPropsType) => {
    return (
        <button className={s.button} onClick={props.callback}>{props.title}</button>
    );
};

