import { useState, useEffect  } from 'react'
import './App.css'
import Titulo from './components/Titulo/Titulo.jsx'
import Home from '../pages/Home/home'

import FormularioItem from './components/FormularioItem/FormularioItem.jsx'

function App() {

const [items, setItems] = useState([]);
const [itemEditado, setItemEditado] = useState(null);
const [filtroVista, setFiltroVista] = useState('todos');

const [terminoBusqueda, setTerminoBusqueda] = useState('');

const [filtroGenero, setFiltroGenero] = useState('todos');
const [filtroTipo, setFiltroTipo] = useState('todos');

const [ordenCampo, setOrdenCampo] = useState('anio');
const [ordenDireccion, setOrdenDireccion] = useState('ascendente');

const [cargando, setCargando] = useState(true);

useEffect(() => {
  const data = localStorage.getItem('items');
  if (data) {
    setItems(JSON.parse(data));
  }
  setCargando(false);
} , []);

useEffect(() => {
  if (!cargando) {
  localStorage.setItem('items', JSON.stringify(items));
  }
}, [items, cargando]); 

const agregarOEditarItem = (item) => {
  if (itemEditado) {
    setItems(items.map(itemActual => itemActual.id === item.id ? item : itemActual));
    setItemEditado(null);
  } else {
    setItems([...items, item]);
  }
};

const eliminarItem = (id) => {
  const confirmar = window.confirm('¿Estás seguro de que querés eliminar esto?');
  if (confirmar) {
    setItems(items.filter(item => item.id !== id));
  }
};

const cambiarEstadoVisto = (id) => {
  setItems(items.map(item =>
    item.id === id ? { ...item, vista: !item.vista } : item
  ));
};

const iniciarEdicion = (item) => {
  setItemEditado(item);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const itemsFiltradosPorVista = items.filter(item => {
  if (filtroVista === 'porVer') return !item.vista;
  if (filtroVista === 'vistos') return item.vista;
  return true;
});

const itemsFiltradosPorBusqueda = itemsFiltradosPorVista.filter(item => {
  const termino = terminoBusqueda.toLowerCase();
  return (
    item.titulo.toLowerCase().includes(termino) ||
    item.director.toLowerCase().includes(termino)
  );
});

const itemsFiltrados = itemsFiltradosPorBusqueda.filter(item => {
  const generoOK = filtroGenero === 'todos' || item.genero === filtroGenero;
  const tipoOK = filtroTipo === 'todos' || item.tipo === filtroTipo;
  return generoOK && tipoOK;
});

const itemsOrdenados = [...itemsFiltrados].sort((itemA, itemB) => {
  if (ordenCampo === 'anio') {
    return ordenDireccion === 'ascendente' ? itemA.anio - itemB.anio : itemB.anio - itemA.anio;
  } else if (ordenCampo === 'rating') {
    return ordenDireccion === 'ascendente' ? itemA.rating - itemB.rating : itemB.rating - itemA.rating;
  }
  return 0;
});


const cancelarEdicion = () => {
  setTimeout(() => {
    setItemEditado(null);
  }, 0);
};




  return (

    <div>
    <Home
    
      items= {items}
      itemEditado= {itemEditado}
      agregarOEditarItem= {agregarOEditarItem}
      eliminarItem= {eliminarItem}
      cambiarEstadoVisto= {cambiarEstadoVisto}
      iniciarEdicion= {iniciarEdicion}
      cancelarEdicion={cancelarEdicion}
      filtroVista= {filtroVista}
      setFiltroVista= {setFiltroVista}
      terminoBusqueda={terminoBusqueda}
      setTerminoBusqueda={setTerminoBusqueda}
      filtroGenero={filtroGenero}
      setFiltroGenero={setFiltroGenero}
      filtroTipo={filtroTipo}
      setFiltroTipo={setFiltroTipo}
      itemsOrdenados={itemsOrdenados}
      ordenCampo={ordenCampo}
      setOrdenCampo={setOrdenCampo}
      ordenDireccion={ordenDireccion}
      setOrdenDireccion={setOrdenDireccion}
      />


  </div>
  )
}

export default App


