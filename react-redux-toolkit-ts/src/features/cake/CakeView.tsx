import { ordered, restoked } from './cakeSlice';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';

const CakeView = () => {
  const {numOfCakes} = useSelector(state => state.cakes)
  const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of cakes - {numOfCakes} </h2>
        <button onClick={() => dispatch(ordered())}>Order cakes</button>
        <button onClick={() => dispatch(restoked(1))}>Restock cakes</button>
    </div>
  );
};

export default CakeView;