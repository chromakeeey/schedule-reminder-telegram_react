import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
  en: {
    noAuthLabel: "You are not authorized",
    telegramAuth: "Go to the bot and click the \"Authorize in the browser\" button in the menu.",
    goTelegram: "Go to Telegram",
  },
  ru: {
    noAuthLabel: "Вы не авторизованы",
    telegramAuth: "Перейдите к боту и нажмите кнопку \"Авторизация в браузере\" в меню.",
    goTelegram: "Перейти в Telegram",
  },
  ua: {
    noAuthLabel: "Ви не авторизовані",
    telegramAuth: "Перейдіть до бота і натисніть \"Авторизація в браузері\" в меню.",
    goTelegram: "Перейти в Telegram",
  }
});

export default strings;