import { ordered, restoked } from './cakeSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const CakeView = () => {
  const {numOfCakes} = useAppSelector(state => state.cakes)
  const dispatch = useAppDispatch()

  return (
    <div>
        <h2>Number of cakes - {numOfCakes} </h2>
        <button onClick={() => dispatch(ordered())}>Order cakes</button>
        <button onClick={() => dispatch(restoked(1))}>Restock cakes</button>
    </div>
  );
};

export default CakeView;