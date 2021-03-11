import React from 'react';

const MediaList = (props) => {
  const { media } = props;
  return (
    <div>
      {media.map((med) => {
        return <p key={med.id}>{med.name}</p>;
      })}
    </div>
  );
};

export default MediaList;
