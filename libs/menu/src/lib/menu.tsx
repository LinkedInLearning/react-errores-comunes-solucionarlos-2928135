import { Dishes } from '@restaurant/models';
import './menu.module.scss';

/* eslint-disable-next-line */
export interface MenuProps {}

export function Menu(props: MenuProps) {
  const dishes: Dishes[] = [];

  return (
    <div>
      <h1>Platillos</h1>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>{dish.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
