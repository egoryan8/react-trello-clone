import { IBoard } from "../Interfaces/Kanban";

export const ApiMockResponse: IBoard[] = [
  {
    id: 1,
    title: "Queue",
    cards: [
      {
        id: 1651319552926.0933,
        title: "Тестовая таска1",
        labels: [{ color: "red", text: "Срочно" }],
        date: "2023-02-08",
        tasks: [
          { id: 1651319625559.8025, completed: true, text: "Подзадача 1" },
          { id: 1651319629650.8945, completed: false, text: "Подзадача 2" },
          { id: 1651319633774.9905, completed: false, text: "Подзадача 3" },
        ],
        desc: "Полное описание таски",
      },
      {
        id: 1651319568365.593,
        title: "Тестовая таска 2",
        labels: [{ color: "orange", text: "По возможности" }],
        date: "",
        tasks: [],
      },
      {
        id: 1651319568312312315.593,
        title: "Тестовая таска 3",
        labels: [{ color: "green", text: "Не срочно" }],
        date: "",
        tasks: [],
      },
    ],
  },
  {
    id: 2,
    title: "Development",
    cards: [
      {
        id: 1651319672685.5078,
        title: "Тестовая таска 4",
        labels: [{ color: "orange", text: "По возможности" }],
        date: "",
        tasks: [
          { id: 1651319728301.3855, completed: false, text: "Доп. задача" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Done",
    cards: [
      {
        id: 1651319677070.0732,
        title: "Выполненная таска",
        labels: [{ color: "red", text: "Срочно" }],
        date: "2022-12-06",
        tasks: [],
      },
    ],
  },
];
