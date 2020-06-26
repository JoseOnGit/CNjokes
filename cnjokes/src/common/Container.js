import React from 'react';

function Container(props) {
  const classes = props.className ? ' ' + props.className : '';
  return (
    <div className={"container" + classes}>
      {props.children}
    </div>
  )
}
export default Container;