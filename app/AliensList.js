import React, { Component } from 'react';
import AlienListItem from './AlienListItem';

const AliensList = (props) => {
  const { aliens, selectAlien, goAliens } = props;
  return (
    <div>
      {aliens.map((alien) => {
        return (
          <AlienListItem
            key={alien.id}
            alien={alien}
            selectAlien={selectAlien}
            goAliens={goAliens}
          />
        );
      })}
    </div>
  );
};

export default AliensList;
