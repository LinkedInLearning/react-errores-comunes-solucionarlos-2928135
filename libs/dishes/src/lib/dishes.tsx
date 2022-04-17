import './dishes.module.scss';
import { Dish } from './models/dish.interfaces';

/* eslint-disable-next-line */
export interface DishesProps {}

export function Dishes(props: DishesProps) {
  const dishes: Dish[] = [];
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
