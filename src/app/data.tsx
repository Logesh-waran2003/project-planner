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
    card_id: "a",
    title: "Task 1",
    description: "Task 1 Description",
    column: "todo",
  },
  {
    card_id: "b",
    title: "Task 2",
    description: "Task 2 Description",
    column: "todo",
  },
  {
    card_id: "c",
    title: "Task 3",
    description: "Task 3 Description",
    column: "in-progress",
  },
  {
    card_id: "d",
    title: "Task 4",
    description: "Task 4 Description",
    column: "in-progress",
  },
  {
    card_id: "e",
    title: "Task 5",
    description: "Task 5 Description",
    column: "done",
  },
  {
    card_id: "f",
    title: "Task 6",
    description: "Task 6 Description",
    column: "done",
  },
  {
    card_id: "g",
    title: "Task 7",
    description: "Task 7 Description",
    column: "done",
  },
  {
    card_id: "h",
    title: "Task 8",
    description: "Task 7 Description",
    column: "done",
  },
];

export { columnData, cardData };
