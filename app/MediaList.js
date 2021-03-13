import React from 'react';

const MediaList = (props) => {
  const { media } = props;
  return (
    <div>
      <h3>This is a list of all the source media thus far</h3>
      {media.map((med) => {
        return (
          <div key={med.id} class="list">
            <p>{med.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MediaList;
