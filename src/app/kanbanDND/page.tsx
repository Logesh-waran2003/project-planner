"use client";
import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import { cardData, columnData } from "../data";
import { CardData, ColumnData } from "../types";

const Page = () => {
  const [cards, setCards] = useState<CardData[]>(cardData);
  const [kanbans] = useState<ColumnData[]>(columnData);

  const onDragEnd: OnDragEndResponder = (result) => {
    const { destination, source, draggableId } = result;
    console.log("result", result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newCards = cards.map((card) => {
      if (card.card_id === draggableId) {
        return {
          ...card,
          column: destination.droppableId,
        };
      }
      return card;
    });
    setCards(newCards);
  };

  useEffect(() => {
    console.log("cards", cards);
  }, [cards]);

  return (
    <div className="mt-8">
      <h1 className="text-gray-900 text-center text-4xl font-bold">
        Kanban Board
      </h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="mt-4 p-2 flex justify-between items-center">
          {kanbans.map((kanban) => (
            <Droppable
              key={kanban.id}
              droppableId={kanban.id}
              isDropDisabled={false}
              isCombineEnabled={false}
              ignoreContainerClipping={false}
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="px-4 py-2 mr-2 w-full rounded h-96 bg-gray-200"
                >
                  <h2 className="text-gray-900 text-center rounded text-2xl font-bold">
                    {kanban.title}
                  </h2>
                  <div className="mt-2 p-2 min-h-10 rounded bg-slate-300">
                    {cards
                      .filter((card) => card.column === kanban.id)
                      .map((card, index) => (
                        <Draggable
                          key={card.card_id}
                          draggableId={card.card_id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="m-2 p-2 bg-gray-100 rounded-lg"
                            >
                              <p>{card.title}</p>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Page;
