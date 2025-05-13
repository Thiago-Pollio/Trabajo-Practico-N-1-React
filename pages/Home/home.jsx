import Titulo from "../../src/components/Titulo/Titulo"
import FormularioItem from "../../src/components/FormularioItem/FormularioItem";
import Contadores from "../../src/components/Contadores/Contadores";
import Buscador from "../../src/components/Buscador/Buscador";
import FiltroGeneroTipo from "../../src/components/FiltroGeneroTipo/FiltroGeneroTipo";
import Item from "../../src/components/Item/Item";
import { useRef } from 'react';
import styles from './Home.module.css';


//Home no deberia recibir estar props. Todo esto es parte del state y funcionalidad de home asi que 
//deberian estar definidas en este archivo.

function Home({
    items,
    itemEditado,
    agregarOEditarItem,
    eliminarItem,
    cambiarEstadoVisto,
    iniciarEdicion,
    cancelarEdicion,
    filtroVista,
    setFiltroVista,
    terminoBusqueda,
    setTerminoBusqueda,
    filtroGenero,
    setFiltroGenero,
    filtroTipo,
    setFiltroTipo,
    itemsOrdenados,
    ordenCampo,
    setOrdenCampo,
    ordenDireccion,
    setOrdenDireccion,
    scrollAlFormulario
    })

{

    const formularioRef = useRef(null);


    return (

        <div>
            <div className={styles.header}>
              <div className={styles.tituloBox}>
                <Titulo />
              </div>
  
              <div className={styles.acciones}>
                <Buscador
                  terminoBusqueda={terminoBusqueda}
                  setTerminoBusqueda={setTerminoBusqueda}
                />
              </div>
            </div>

            <div className={styles.panelPrincipal}>
                <div className={styles.columnaIzquierda}>
                  <div ref={formularioRef}>
                      <h2 className={styles.subtituloForm}>🎬 Agregar película o serie</h2>
                        <FormularioItem
                          onSubmit={agregarOEditarItem}
                          itemEditado={itemEditado}
                          modoEdicion={!!itemEditado}
                          cancelarEdicion={cancelarEdicion}
                        />
                  </div>

                  <div className={styles.controles}>
                    <div className={styles.vistas}>
                      <button
                        onClick={() => setFiltroVista('todos')}
                        className={filtroVista === 'todos' ? styles.activo : ''}>
                        Todos
                      </button>
                      <button
                        onClick={() => setFiltroVista('porVer')}
                        className={filtroVista === 'porVer' ? styles.activo : ''}>
                        Por ver
                      </button>
                      <button
                        onClick={() => setFiltroVista('vistos')}
                        className={filtroVista === 'vistos' ? styles.activo : ''}>
                        Vistos
                      </button>
                    </div>

                    <FiltroGeneroTipo
                      filtroGenero={filtroGenero}
                      setFiltroGenero={setFiltroGenero}
                      filtroTipo={filtroTipo}
                      setFiltroTipo={setFiltroTipo}
                    />

                    <div className={styles.ordenamiento}>
                        <label>
                             Ordenar por:
                                <select value={ordenCampo} onChange={(e) => setOrdenCampo(e.target.value)}>
                                    <option value="anio">Año</option>
                                    <option value="rating">Rating</option>
                                </select>
                        </label>
                        <label>
                            Dirección:
                                <select value={ordenDireccion} onChange={(e) => setOrdenDireccion(e.target.value)}>
                                     <option value="ascendente">Ascendente</option>
                                     <option value="descendente">Descendente</option>
                                </select>
                        </label>
                    </div>
                    
                    <Contadores items={items} />
            </div>
        </div>

        <div className={styles.columnaDerecha}>
          <h2 className={styles.tituloVista}>
            {filtroVista === 'porVer' && '🎬 Por ver'}
            {filtroVista === 'vistos' && '👁️ Vistas'}
            {filtroVista === 'todos' && '🎞️ Todos'}
          </h2>

          {itemsOrdenados.length === 0 ? (
            <p>No hay contenido cargado todavía.</p>
          ) : (
            <ul className={styles.listaItems}>
              {itemsOrdenados.map(item => (
                <Item
                  key={item.id}
                  item={item}
                  cambiarEstadoVisto={cambiarEstadoVisto}
                  iniciarEdicion={iniciarEdicion}
                  eliminarItem={eliminarItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

