import styles from './app.module.scss';

export function App() {
  const dishes = ['ceviche', 'tacos', 'hamburguesa'];

  return (
    <div className={styles.app}>
      <header className="flex">
        <h1>Platillos</h1>
      </header>
      <main>
        <ul>
          {dishes.map((dish) => (
            <li>{dish}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
