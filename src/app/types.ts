type CardData = {
  card_id: number;
  title: string;
  description: string;
  column: string;
};

type ColumnData = {
  id: string;
  title: string;
};

export type { CardData, ColumnData };
