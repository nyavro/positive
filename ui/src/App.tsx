import * as React from "react";
import './App.less'
import {Plate} from "./Components/Plate";
import { WebApp } from "./Models";

declare global {
    interface Window {
        Telegram: {WebApp: WebApp}
    }
}

const handleClick = (selected: string) => {
    window.Telegram.WebApp.close();
    window.Telegram.WebApp.sendData(
        {
            data: "hey!!",
            button_text: selected
        }
    );
    console.log("debug", selected);
}

export const App = () => {
    return (<div className="layout">
        <h3 className="header">Куда пойти?</h3>
        <Plate text="В баню" onClick={handleClick}/>
        <Plate text="В клубняк" onClick={handleClick}/>
        <Plate text="В бар" onClick={handleClick}/>
        <div>{!!window.Telegram || 'empty Telegram'}</div>
        <div>{!!window.Telegram.WebApp || 'empty WebApp'}</div>
        <div>{!!window.Telegram.WebApp.initData || 'empty initData'}</div>
    </div>);
};
