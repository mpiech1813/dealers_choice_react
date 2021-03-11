import React, { Component } from 'react';
import AlienListItem from './AlienListItem';

const AliensList = (props) => {
  const { aliens, selectAlien, goAlienDetail } = props;
  return (
    <div>
      {aliens.map((alien) => {
        return (
          <AlienListItem
            key={alien.id}
            alien={alien}
            selectAlien={selectAlien}
            // goAlienDetail={goAlienDetail}
          />
        );
      })}
    </div>
  );
};

export default AliensList;
