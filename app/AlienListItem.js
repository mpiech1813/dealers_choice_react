import React, { Component } from 'react';

const AlienListItem = (props) => {
  const alien = props.alien;
  const selectAlien = props.selectAlien;
  const goAliens = props.goAliens;
  return (
    <div onClick={() => selectAlien(alien.id)}>
      <p>{alien.name}</p>
    </div>
  );
};

export default AlienListItem;
