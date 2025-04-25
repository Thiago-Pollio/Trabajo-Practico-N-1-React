import styles from './FormularioItem.module.css';
import { useState, useEffect } from 'react';

const generos = ['Acción', 'Comedia', 'Drama', 'Terror', 'Ciencia Ficción', 'Documental'];
const tipos = ['Película', 'Serie'];

function FormularioItem({ onSubmit, itemEditado = null, modoEdicion = false, cancelarEdicion }) {
  const [form, setForm] = useState({
    titulo: '',
    director: '',
    anio: '',
    genero: '',
    rating: '',
    tipo: 'Película',
    imagen: '',
  });


  useEffect(() => {
    if (itemEditado) {
      setForm(itemEditado);
    } else {
      setForm({
        titulo: '',
        director: '',
        anio: '',
        genero: '',
        rating: '',
        tipo: 'Película',
        imagen: ''
      });
    }
  }, [itemEditado]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.titulo || !form.director || !form.anio || !form.genero || !form.rating) {
      alert('¡LLená todos los campos!');
      return;
    }
    onSubmit({ ...form, id: itemEditado?.id || Date.now(), vista: itemEditado?.vista || false });
    setForm({ titulo: '', director: '', anio: '', genero: '', rating: '', tipo: 'Película', imagen: '' });
  };
    

  return (
    <form onSubmit={handleSubmit} className={styles.formulario}>
      <input name="titulo" value={form.titulo} onChange={handleChange} placeholder="Título" />
      <input name="director" value={form.director} onChange={handleChange} placeholder="Director" />
      <input name="anio" type="number" value={form.anio} onChange={handleChange} placeholder="Año" />
      <select name="genero" value={form.genero} onChange={handleChange}>
        <option value="">Género</option>
        {generos.map((genero) => <option key={genero} value={genero}>{genero}</option>)}
      </select>
      <input name="rating" type="number" value={form.rating} onChange={handleChange} placeholder="Rating (1-10)" min={1} max={10} />
      <select name="tipo" value={form.tipo} onChange={handleChange}>
        {tipos.map((tipo) => <option key={tipo} value={tipo}>{tipo}</option>)}
      </select>
      <input name= "imagen" value={form.imagen} onChange={handleChange} placeholder= "URL de imagen" />
      <button type="submit">{modoEdicion ? 'Guardar cambios' : 'Agregar'}</button>
      {modoEdicion && (
  <button type="button" onClick={cancelarEdicion}>Cancelar</button>
)}
    </form>
  );


}

export default FormularioItem;