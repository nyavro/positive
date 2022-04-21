# Positive

Positive is a simple [Telegram](https://telegram.org/) bot demonstrating *Web Apps* 
feature introduced in [Bot API v.6.0](https://core.telegram.org/bots/api#april-16-2022)

The bot itself is a modified [echo bot](https://github.com/kotlin-telegram-bot/kotlin-telegram-bot/tree/main/samples/echo) implemented using Kotlin wrapper around Telegram bot API
Web application source code is under **UI** folder, it is implemented using React and Typescript.

### Running

To run the bot:
1. Create the bot account and obtain bot token at [@BotFather](https://t.me/botfather)
2. Save the token to an environment variable named POSITIVE_BOT_TOKEN, it is used throught the project
3. Build Web App:

       cd ui
       npm i
       npm run build
       
   After build is done you'll see web static files required for Bot web app at /dist folder. 
4. Host generated static somewhere available by HTTPS protocol, for example https://nyavro.github.io/index.html
5. Go to @BotFather and run command /setmenubutton with an URL configured at previous step.
6. Run main Main.kt. This will start echo bot.
7. Open your bot in Telegram and click at Bot's 'menu' button configured at step 5.
8. See the web app, click buttons and get a response from web app to the bot: 
 
       
![photo_2022-04-21_22-00-06](https://user-images.githubusercontent.com/3238013/164487432-8f43bb28-459c-4af9-a554-a3e7e7719d75.jpg)
