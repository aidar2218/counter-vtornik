import React from 'react';
import s from "./Settings.module.css"
import {InputData} from "./InputData/InputData";
import {UniversalButton} from "../UniversalButton/UniversalButton";

type SettingsPropsType = {
    maxValue: number
    startValue: number
    getMaxValue: (value: number) => void
    getStartValue: (value: number) => void
}

export const Settings = (props: SettingsPropsType) => {
    return (
        <div className={s.main}>
            <InputData maxValue={props.maxValue}
                       startValue={props.startValue}
                       getMaxValue={props.getMaxValue} getStartValue={props.getStartValue}/>
            <div className={s.windowForButton}>
                <UniversalButton title={"SET"} callback={() => {}}/>
            </div>
        </div>
    );
};

