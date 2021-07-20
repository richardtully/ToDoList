import React from 'react';

const Item = (props) => {
  return (
    <p>
    <input type='checkbox'></input>
    <s>
    {props.value}
    </s>
    </p>
  )
}
export default Item;