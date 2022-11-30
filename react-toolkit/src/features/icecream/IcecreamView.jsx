import React from 'react';
import { useSelector } from 'react-redux';

const IcecreamView = () => {
  const {numOfIcecreams} = useSelector(state => state.icecreams)

  return (
    <div>
        <h2>Number of ice cream- {numOfIcecreams}</h2>
        <button>Order ice cream</button>
        <button>Restock ice cream</button>
    </div>
  );
};

export default IcecreamView;