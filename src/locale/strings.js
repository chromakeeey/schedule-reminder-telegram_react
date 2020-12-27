import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
  en: {
    noAuthLabel: "You are not authorized",
    telegramAuth: "Go to the bot and click the \"Authorize in the browser\" button in the menu.",
    goTelegram: "Go to Telegram",
    brandName: "Schedule Reminder",
    mySchedules: "My schedules",
    mySubs: "My subscriptions",
    search: "Search",
    searchSchedule: "Enter the name or ID of the schedule",
  },
  ru: {
    noAuthLabel: "Вы не авторизованы",
    telegramAuth: "Перейдите к боту и нажмите кнопку \"Авторизация в браузере\" в меню.",
    goTelegram: "Перейти в Telegram",
    brandName: "Расписание",
    mySchedules: "Мои расписания",
    mySubs: "Мои подписки",
    search: "Поиск",
    searchSchedule: "Введите ИД или название расписания",
  },
  ua: {
    noAuthLabel: "Ви не авторизовані",
    telegramAuth: "Перейдіть до бота і натисніть \"Авторизація в браузері\" в меню.",
    goTelegram: "Перейти в Telegram",
    brandName: "Розклад",
    mySchedules: "Мої розклади",
    mySubs: "Мої підписки",
    search: "Search",
    searchSchedule: "Введіть ІД або назву розкладу",
  }
});

export default strings;