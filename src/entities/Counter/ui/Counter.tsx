import { useDispatch, useSelector } from 'react-redux';
import { counterActions, getCounterValue } from '@/entities/Counter';

export const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Counter value: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
