import React, { Component } from 'react';
import AlienListItem from './AlienListItem';

const AliensList = (props) => {
  const { aliens, selectAlien } = props;
  return (
    <ul>
      {aliens.map((alien) => {
        return (
          <AlienListItem
            key={alien.id}
            alien={alien}
            selectAlien={selectAlien}
          />
        );
      })}
    </ul>
  );
};

export default AliensList;
