import React from 'react';
import styles from './Buscador.module.css'

function Buscador({ terminoBusqueda, setTerminoBusqueda }) {
  return (
    <input
      className={styles.inputBusqueda}
      type="text"
      placeholder="Buscar por título o director..."
      value={terminoBusqueda}
      onChange={(e) => setTerminoBusqueda(e.target.value)}
    />
  );
}

export default Buscador;