import React from 'react';
import { Itens } from "./itens";
import { Card } from "./styles";
import cardsData from '../../data/cards.json';

export function Cards() {
  const data = cardsData.cards;

  return (
    <Card>
      {data.slice().reverse().map((card, index) => (
        <Itens
          key={index}
          icon={card.icon}
          title={card.titulo}
          desc={card.texto}
        />
      ))}
    </Card>
  )
}
