import React from 'react';
import Items from './Items';

const CharacterGrid = ( { items, isLoading } ) => {
  return isLoading ? (
    <h1>Processing...</h1>
  ) : (
    <section className="cards">
      {items.map((cast) => (
        <Items key={cast.id} item={cast} ></Items>
      ))}
    </section>
  );
}

export default CharacterGrid