"use client";
import React, { useState } from "react";
import { cardData, columnData } from "./data";

const Page = () => {
  const [cards, setCards] = useState(cardData);
  const [kanbans, setKanbans] = useState(columnData);

  return (
    <div className="mt-8">
      <h1 className="text-gray-900 text-center text-4xl font-bold">
        Kanban Board
      </h1>
      <div className="mt-4 p-2 flex justify-between items-center">
        {kanbans.map((kanban) => (
          <div
            key={kanban.id}
            className="px-4 py-2  mr-2 w-full rounded  h-80 bg-gray-200"
          >
            <h2 className="text-gray-900 text-center text-2xl font-bold">
              {kanban.title}
            </h2>
            <div className="mt-2 p-2 h-full overflow-auto bg-slate-300 ">
              {cards.map((card) => (
                <div
                  key={card.card_id}
                  className="m-2 p-2 bg-gray-100 rounded-lg"
                >
                  <p>{card.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
