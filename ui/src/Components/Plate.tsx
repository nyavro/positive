import * as React from "react";
import {useCallback} from "react";

interface IProps {
    text: string;
    onClick: (id: string) => void;
}

export const Plate = ({text, onClick}: IProps) => {
    const handleClick = useCallback(
        () => onClick(text)
        ,
        [text, onClick]
    )
    return (<div className="plate" onClick={handleClick}>
        {text}
    </div>);
};