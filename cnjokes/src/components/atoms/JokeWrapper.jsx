import React from 'react';

import '../../app.css';

const JokeWrapper = ({ id, children }) => (
  <div className="card" id={id}>
    {children}
  </div>
);

export default JokeWrapper;
