import { useEffect } from 'react';
import './dishes.module.scss';
import { Dish } from './models/dish.interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDishes, selectAllDishes } from './+state/dishes.slice';

/* eslint-disable-next-line */
export interface DishesProps {}

export function Dishes(props: DishesProps) {
  // const dishes: Dish[] = [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  const dishes = useSelector(selectAllDishes);

  return (
    <div>
      <h1>Welcome to Dishes!</h1>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>{dish.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dishes;