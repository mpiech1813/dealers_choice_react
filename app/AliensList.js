import React, { Component } from 'react';
import AlienListItem from './AlienListItem';

const AliensList = (props) => {
  const { aliens } = props;
  return (
    <ul>
      {aliens.map((alien) => {
        return <AlienListItem key={alien.id} alien={alien} />;
      })}
    </ul>
  );
};

export default AliensList;
