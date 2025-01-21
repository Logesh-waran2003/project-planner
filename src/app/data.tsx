import { CardData, ColumnData } from "./types";

const columnData: ColumnData[] = [
  {
    id: "todo",
    title: "To Do",
  },
  {
    id: "in-progress",
    title: "In Progress",
  },
  {
    id: "done",
    title: "Done",
  },
  {
    id: "deployed",
    title: "Deployed",
  },
];

const cardData: CardData[] = [
  {
    card_id: 1,
    title: "Task 1",
    description: "Task 1 Description",
    column: "todo",
  },
  {
    card_id: 2,
    title: "Task 2",
    description: "Task 2 Description",
    column: "todo",
  },
  {
    card_id: 3,
    title: "Task 3",
    description: "Task 3 Description",
    column: "in-progress",
  },
  {
    card_id: 4,
    title: "Task 4",
    description: "Task 4 Description",
    column: "in-progress",
  },
  {
    card_id: 5,
    title: "Task 5",
    description: "Task 5 Description",
    column: "done",
  },
  {
    card_id: 6,
    title: "Task 6",
    description: "Task 6 Description",
    column: "done",
  },
  {
    card_id: 7,
    title: "Task 7",
    description: "Task 7 Description",
    column: "done",
  },
  {
    card_id: 8,
    title: "Task 8",
    description: "Task 7 Description",
    column: "done",
  },
];

export { columnData, cardData };
