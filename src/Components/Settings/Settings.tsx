import React, {useState} from 'react';
import s from "./Settings.module.css"
import {InputData} from "./InputData/InputData";
import {UniversalButton} from "../UniversalButton/UniversalButton";

type SettingsPropsType = {
    maxValue: number
    startValue: number
    getValues: (max: number, start: number) => void
}

type LocalValuesDataType = {
    maxValue: number
    startValue: number
}

export const Settings = (props: SettingsPropsType) => {

    // const [localMaxValue, setLocalMaxValue] = useState(props.maxValue);
    // const [localStartValue, setLocalStartValue] = useState(props.startValue);

    const [localValuesData, setLocalValueData] = useState <LocalValuesDataType> ({
        maxValue: props.maxValue,
        startValue: props.startValue
    })

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const onChangeMaxValue = (value: number) => {
        setLocalValueData({...localValuesData, maxValue: value});
        setButtonDisabled(false);
    };

    const onChangeStartValue = (value: number) => {
        setLocalValueData({...localValuesData, startValue: value});
        setButtonDisabled(false);
    };

    const setValues = () => {
        props.getValues(localValuesData.maxValue, localValuesData.startValue);
        setButtonDisabled(true);
    }



    return (
        <div className={s.main}>
            <InputData maxValue={localValuesData.maxValue}
                       startValue={localValuesData.startValue}
                       getMaxValue={onChangeMaxValue} getStartValue={onChangeStartValue}/>
            <div className={s.windowForButton}>
                <UniversalButton title={"SET"} callback={setValues} disable={buttonDisabled}/>
            </div>
        </div>
    );
};

