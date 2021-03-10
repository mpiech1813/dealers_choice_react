import React, { Component } from 'react';

const AlienListItem = (props) => {
  const alien = props.alien;
  return <li>{alien.name}</li>;
};

export default AlienListItem;
