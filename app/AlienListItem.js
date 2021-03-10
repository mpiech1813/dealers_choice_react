import React, { Component } from 'react';

const AlienListItem = (props) => {
  const alien = props.alien;
  const selectAlien = props.selectAlien;
  return <li onClick={() => selectAlien(alien.id)}>{alien.name}</li>;
};

export default AlienListItem;
