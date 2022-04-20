import {token} from "./consts";
import {SentWebAppMessage, WebAppUser} from "./Models";

export const sendMessage = (queryId: string, message: string, user?: WebAppUser): Promise<SentWebAppMessage> => {
    return fetch(`https://api.telegram.org/bot${token}/answerWebAppQuery`,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                web_app_query_id: queryId,
                result: {
                    type: 'document',
                    id: (Date.now()*100 + Math.round(Math.random()*100)),
                    title: message,
                    document_file_id: "doc.txt",
                    mime_type: "application/zip",
                    document_url: "https://telegram.org/js/telegram-web-app.js",
                    input_message_content:	{
                        message_text: JSON.stringify({
                            user: user?.username,
                            message: message
                        })
                    }
                }
            })
        }).then((value => value as SentWebAppMessage)
    )
}