import styles from './Item.module.css';

function Item({item, cambiarEstadoVisto, iniciarEdicion, eliminarItem}) {
    return (
        <li key={item.id} className={styles.card}>

       <h3>{item.titulo} ({item.anio})</h3>
<p><strong>Tipo:</strong> {item.tipo}</p>
<p><strong>Género:</strong> {item.genero}</p>
<p><strong>Rating:</strong> ⭐{item.rating}</p>
<p><strong>Director:</strong> {item.director}</p>
<p><strong>Estado:</strong> <em>{item.vista ? 'Visto' : 'Por ver'}</em></p>

        {item.imagen && (
            <img
            src={item.imagen}
            alt={`Póster de ${item.titulo}`}
            className={styles.imagen}
            />
        )}
        <br />
        <div className={styles.botones}>
        <button className={`${styles.boton} ${item.vista ? styles.visto : styles.noVisto}`} onClick={() => cambiarEstadoVisto(item.id)}>
        {item.vista ? 'Marcar como no visto' : 'Marcar como visto'}
        </button>
        <button className={`${styles.boton} ${styles.editar}`} onClick={() => iniciarEdicion(item)}>Editar</button>
        <button className={`${styles.boton} ${styles.eliminar}`} onClick={() => eliminarItem(item.id)}>Eliminar</button>
        </div>
    </li>
    );
}

export default Item;