import React from 'react';
import styles from './FiltroGeneroTipo.module.css'

function FiltroGeneroTipo({ filtroGenero, setFiltroGenero, filtroTipo, setFiltroTipo }) {
  return (
    <div className={styles.filtros}>
      <label className={styles.generoTipo}>
        Género:
        <select value={filtroGenero} onChange={(e) => setFiltroGenero(e.target.value)}>
          <option value="todos">Todos</option>
          <option value="Acción">Acción</option>
          <option value="Drama">Drama</option>
          <option value="Comedia">Comedia</option>
          <option value="Terror">Terror</option>
          <option value="Ciencia Ficción">Ciencia Ficción</option>
          <option value="Documental">Documental</option>
        </select>
      </label>
      <label  className={styles.generoTipo}>
        Tipo:
        <select value={filtroTipo} onChange={(e) => setFiltroTipo(e.target.value)}>
          <option value="todos">Todos</option>
          <option value="Película">Película</option>
          <option value="Serie">Serie</option>
        </select>
      </label>
    </div>
  );
}

export default FiltroGeneroTipo;