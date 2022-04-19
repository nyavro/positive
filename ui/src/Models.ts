interface ThemeParams {
}

interface MainBtn {
}

export interface WebAppData {
    data: string;
    button_text: string;
}

/**
 * @prop initData A string with raw data transferred to the Web App, convenient for validating data.
 WARNING: Validate data from this field before using it on the bot's server.
 * @prop colorScheme The color scheme currently used in the Telegram app. Either “light” or “dark”.
 Also available as the CSS variable var(--tg-color-scheme).
 */
export interface WebApp {
    initData: string;
    colorScheme: string;
    themeParams: ThemeParams;
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    MainButton: MainBtn;
    sendData: (webAppData: WebAppData) => void;
    close: () => void;
}