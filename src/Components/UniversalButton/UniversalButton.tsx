import React from 'react';
import s from "./UniversalButton.module.css"
import {Button} from "@material-ui/core";

type UniversalButtonPropsType = {
    title: string
    callback: () => void
    disable: boolean
}

export const UniversalButton = (props: UniversalButtonPropsType) => {
    return (
        <Button variant={"contained"}
                disabled={props.disable}
                style={{margin: "30px"}}
                className={s.button}
                onClick={props.callback}>
            {props.title}
        </Button>
    );
};

