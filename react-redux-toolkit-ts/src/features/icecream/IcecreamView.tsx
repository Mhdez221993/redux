import { ordered, restoked } from './icecreamSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { useState } from 'react';

const IcecreamView = () => {
  const {numOfIcecreams} = useAppSelector(state => state.icecreams)
  const [value, setValue] = useState(1)
  const dispatch = useAppDispatch()

  return (
    <div>
        <h2>Number of ice cream- {numOfIcecreams}</h2>
        <button onClick={() => dispatch(ordered())}>Order ice cream</button>
        <input title="Order ice cream" type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value))}/>
        <button onClick={() => dispatch(restoked(value))}>Restock ice cream</button>
    </div>
  )
}

export default IcecreamView
