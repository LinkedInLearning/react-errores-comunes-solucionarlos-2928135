import styles from './app.module.scss';

export function App() {
  const dishes = [
    { id: 1, name: 'ceviche' },
    { id: 2, name: 'tacos' },
    { id: 3, name: 'hamburguesa' },
  ];

  return (
    <div className={styles.app}>
      <header className="flex">
        <h1>Platillos</h1>
      </header>
      <main>
        <div>
          {/* Componente de Menú */}
          <ul>
            {dishes.map((dish) => (
              <li key={dish.id}>{dish.name}</li>
            ))}
          </ul>
        </div>
        <div>{/* Componente de Cocina */}</div>
        <div>{/* Componente de Cuenta */}</div>
        <div>{/* Componente de Pedidos */}</div>
      </main>
    </div>
  );
}

export default App;
