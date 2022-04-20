package com.positive.bot

import com.github.kotlintelegrambot.bot
import com.github.kotlintelegrambot.dispatch
import com.github.kotlintelegrambot.dispatcher.*
import com.github.kotlintelegrambot.dispatcher.message
import com.github.kotlintelegrambot.entities.ChatId
import com.github.kotlintelegrambot.entities.InlineKeyboardMarkup
import com.github.kotlintelegrambot.entities.keyboard.InlineKeyboardButton
import com.github.kotlintelegrambot.entities.keyboard.WebAppInfo

fun main() {
    val bot = bot {
        token = System.getenv("POSITIVE_BOT_TOKEN")
        dispatch {
            command("setDate") {
                bot.sendMessage(
                    chatId = ChatId.fromId(message.chat.id), text = "Command setDate" + message.text,
                    replyMarkup = InlineKeyboardMarkup.createSingleButton(
                        InlineKeyboardButton.WebApp("one",
                            WebAppInfo("https://nyavro.github.io/index.html")
                        )
                    )
                )
            }
            command("two") {
                bot.sendMessage(
                    chatId = ChatId.fromId(message.chat.id), text = "Command setDate" + message.text,
                    replyMarkup = InlineKeyboardMarkup.createSingleButton(
                        InlineKeyboardButton.WebApp("two",
                            WebAppInfo("https://nyavro.github.io/index2.html")
                        )
                    )
                )
            }
            channel {
                println()
            }
            callbackQuery {
                println()
            }
            inlineQuery {
                println()
            }
            message {
                bot.sendMessage(chatId = ChatId.fromId(message.chat.id), text = message.text + ":" + message.document)
            }
            document {
                bot.sendMessage(chatId = ChatId.fromId(message.chat.id), text = message.text + ":" + message.document)
            }
            text {
                bot.sendMessage(chatId = ChatId.fromId(message.chat.id), text = text + ":" + text)
            }
        }
    }

    bot.startPolling()
}