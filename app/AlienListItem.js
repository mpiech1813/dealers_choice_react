import React, { Component } from 'react';

const AlienListItem = (props) => {
  const { alien } = props;
  const selectAlien = props.selectAlien;
  const goAliens = props.goAliens;
  return (
    <div onClick={() => selectAlien(alien.id)} class="listItem">
      {alien.name}
    </div>
  );
};

export default AlienListItem;
