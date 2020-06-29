import React from 'react';

const Container = ({className, children}) => 
    <div className={`container ${className ? className : ''}`}>
      {children}
    </div>
export default Container;
