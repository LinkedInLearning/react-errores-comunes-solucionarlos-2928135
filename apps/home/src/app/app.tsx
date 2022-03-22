import styles from './app.module.scss';

import { Route, Link } from 'react-router-dom';

import { Menu } from '@restaurant/menu';

import { Cocina } from '@restaurant/cocina';

import { Cuenta } from '@restaurant/cuenta';

import { Pedidos } from '@restaurant/pedidos';

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <h1>Restaurant</h1>
      </header>
      <main>
        <div role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/pedidos">Pedidos</Link>
            </li>
            <li>
              <Link to="/cuenta">Cuenta</Link>
            </li>
            <li>
              <Link to="/cocina">Cocina</Link>
            </li>
          </ul>
        </div>
      </main>

      <Route
        path="/"
        exact
        render={() => <div>This is the generated root route. </div>}
      />
      <Route path="/menu" component={Menu} />
      <Route path="/pedidos" component={Pedidos} />
      <Route path="/cuenta" component={Cuenta} />
      <Route path="/cocina" component={Cocina} />
    </div>
  );
}

export default App;
