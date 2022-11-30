import React, { useState } from 'react';
import { ordered, restoked } from './icecreamSlice';
import { useDispatch, useSelector } from 'react-redux';

const IcecreamView = () => {
  const {numOfIcecreams} = useSelector(state => state.icecreams)
  const [value, setValue] = useState(1)
  const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of ice cream- {numOfIcecreams}</h2>
        <button onClick={() => dispatch(ordered())}>Order ice cream</button>
        <input type='number' value={value} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={() => dispatch(restoked(parseInt(value)))}>Restock ice cream</button>
    </div>
  )
}

export default IcecreamView
