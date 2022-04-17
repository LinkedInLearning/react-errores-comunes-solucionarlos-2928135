import { Dishes } from '@restaurant/dishes';
import './menu.module.scss';

/* eslint-disable-next-line */
export interface MenuProps {}

export function Menu(props: MenuProps) {
  return (
    <div>
      <h1>Menú</h1>
      <Dishes />
    </div>
  );
}

export default Menu;
