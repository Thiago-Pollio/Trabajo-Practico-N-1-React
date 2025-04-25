import styles from './Titulo.module.css';

function Titulo() {
    return (
        <div className={styles.tituloContenedor}>
            <span className={styles.titulo}>
                TODO
            </span>
            <span className={styles.titulo}>
                CINE Y SERIES
            </span>
        </div>
    );
}

export default Titulo;