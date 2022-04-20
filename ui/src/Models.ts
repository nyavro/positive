interface ThemeParams {
}

interface MainButton {
}

export interface WebAppData {
    data: string;
    button_text: string;
}

/**
 * This object contains the data of the Web App user.
 * @prop id A unique identifier for the user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. It has at most 52 significant bits, so a 64-bit integer or a double-precision float type is safe for storing this identifier.
 * @prop [is_bot] True, if this user is a bot. Returns in the receiver field only.
 * @prop first_name First name of the user or bot.
 * @prop [last_name] Last name of the user or bot.
 * @prop [username] Username of the user or bot.
 * @prop [language_code] IETF language tag of the user's language. Returns in user field only.
 * @prop [photo_url] URL of the user’s profile photo. The photo can be in .jpeg or .svg formats. Only returned for Web Apps launched from the attachment menu.
 */
export interface WebAppUser {
    id: number;
    is_bot?: boolean;
    first_name:	string;
    last_name?: string;
    username?: string;
    language_code?:	string;
    photo_url?: string;
}

/**
 * @prop [query_id] A unique identifier for the Web App session, required for sending messages via the answerWebAppQuery method.
 * @prop [user] An object containing data about the current user.
 * @prop [receiver] An object containing data about the chat partner of the current user in the chat where the bot was
 *  launched via the attachment menu. Returned only for Web Apps launched via the attachment menu.
 * @prop [start_param] The value of the startattach parameter, passed via link.
 *  Only returned for Web Apps when launched from the attachment menu via link.
 *  The value of the start_param parameter will also be passed in the GET-parameter tgWebAppStartParam,
 *  so the Web App can load the correct interface right away.
 * @prop auth_date Unix time when the form was opened.
 * @prop hash A hash of all passed parameters, which the bot server can use to check their validity.
 */
export interface WebAppInitData {
    query_id?: string;
    user?: WebAppUser;
    receiver?: WebAppUser;
    start_param?: string;
    auth_date: number;
    hash: string;
}

/**
 * @prop initData A string with raw data transferred to the Web App, convenient for validating data.
 WARNING: Validate data from this field before using it on the bot's server.
 * @prop colorScheme The color scheme currently used in the Telegram app. Either “light” or “dark”.
 Also available as the CSS variable var(--tg-color-scheme).
 */
export interface WebApp {
    initData: string;
    initDataUnsafe: WebAppInitData;
    colorScheme: string;
    themeParams: ThemeParams;
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    MainButton: MainButton;
    sendData: (webAppData: WebAppData) => void;
    close: () => void;
}

/**
 * Contains information about an inline message sent by a Web App on behalf of a user.
 * @prop [inline_message_id] Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message.
 */
export interface SentWebAppMessage {
    inline_message_id?: string;
}