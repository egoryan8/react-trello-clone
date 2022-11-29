export const formatDate = (value: string) => {
  if (!value) return "";
  const date = new Date(value);
  if (!date) return "";

  const months = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  return day + " " + month;
};
export const colorsList = [
  "red",
  "orange",
  "yellow",
  "green",
];
