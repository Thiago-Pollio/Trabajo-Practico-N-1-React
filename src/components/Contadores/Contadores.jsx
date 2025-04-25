import styles from './Contadores.module.css'

function Contadores({items}) {
    const total = items.length;
    const porVer = items.filter(i => !i.vista).length;
    const vistos = items.filter(i => i.vista).length;

    const conteoGeneros = items.reduce((acc, item) => {
        acc[item.genero] = (acc[item.genero] || 0) +1;
        return acc;
    }, {});

    return (
        <div className={styles.contadoresWrapper}>
        <div className={styles.contadorGrid}>
          <div className={styles.cardContador}>
            <span>🎞️</span>
            <p>Total</p>
            <strong>{total}</strong>
          </div>
          <div className={styles.cardContador}>
            <span>🎬</span>
            <p>Por ver</p>
            <strong>{porVer}</strong>
          </div>
          <div className={styles.cardContador}>
            <span>👁️</span>
            <p>Vistas</p>
            <strong>{vistos}</strong>
          </div>
        </div>
            <div className={styles.generosGrid}>
  <h3>🎭 Conteo por género</h3>
  <div className={styles.generoCards}>
    {Object.entries(conteoGeneros).map(([genero, cantidad]) => (
      <div className={styles.generoCard} key={genero}>
        <p>{genero}</p>
        <strong>{cantidad}</strong>
      </div>
    ))}
  </div>
</div>

        </div>
    );
}

export default Contadores;