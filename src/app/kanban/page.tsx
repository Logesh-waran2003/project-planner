"use client";
import React, { useState } from "react";
import { cardData, columnData } from "../data";
import { CardData, ColumnData } from "../types";

const Page = () => {
  const [cards, setCards] = useState<CardData[]>(cardData);
  const [kanbans, setKanbans] = useState<ColumnData[]>(columnData);
  const [draggedCard, setDraggedCard] = useState<CardData | null>();

  const onDropCard = (id: string) => {
    try {
      const newCards = cards.map((card) => {
        if (card.card_id === draggedCard?.card_id) {
          return {
            ...card,
            column: id,
          };
        }
        return card;
      });
      setCards(newCards);
      console.log("newCards", newCards);
    } catch (error) {
      console.error("Error on dropping card:", error);
    }
  };

  return (
    <div className="mt-8">
      <h1 className="text-gray-900 text-center text-4xl font-bold">
        Kanban Board
      </h1>
      <div className="mt-4 p-2 flex justify-between items-center">
        {kanbans.map((kanban) => (
          <div
            key={kanban.id}
            className="px-4 py-2  mr-2 w-full rounded  h-96 bg-gray-200"
          >
            <h2 className="text-gray-900 text-center rounded text-2xl font-bold">
              {kanban.title}
            </h2>
            <div
              className="mt-2 p-2 min-h-10 overflow-auto rounded bg-slate-300 "
              onDrop={() => {
                onDropCard(kanban.id);
              }}
              onDragOver={(e) => {
                e.preventDefault();
              }}
            >
              {cards.map(
                (card) =>
                  card.column === kanban.id && (
                    <div
                      key={card.card_id}
                      className="m-2 p-2 bg-gray-100 rounded-lg"
                      draggable
                      onDragStart={() => {
                        setDraggedCard(card);
                      }}
                    >
                      <p>{card.title}</p>
                    </div>
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
