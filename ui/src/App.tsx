import * as React from "react";
import './App.less'
import {Plate} from "./Components/Plate";
import { WebApp } from "./Models";
import {useCallback} from "react";
import {sendMessage} from "./BotApi";

declare global {
    interface Window {
        Telegram: {WebApp: WebApp}
    }
}

export const App = () => {
    const initDataUnsafe = window.Telegram.WebApp?.initDataUnsafe;
    const queryId = initDataUnsafe?.query_id || 'AAHs6FUEAAAAAOzoVQRPYshX';
    const handleClick = useCallback((selected: string) => sendMessage(queryId, selected, initDataUnsafe.user), [queryId]);
    return (<div className="layout">
        <h3 className="header">Where to go this evening?</h3>
        <Plate text="To a night club" onClick={handleClick}/>
        <Plate text="For a walk" onClick={handleClick}/>
        <Plate text="To a spa" onClick={handleClick}/>
    </div>);
};
