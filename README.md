Programación Web Avanzada
Trabajo Práctico nº1: REACT

Integrantes del grupo: 

Pollio, Thiago FAI-4267
thiago.pollio@est.fi.uncoma.edu.ar

Salgado, Sol FAI-4266
sol.salgado@est.fi.uncoma.edu.ar

Enunciado: 
Gestor de Películas y Series por Ver y Vistas

Construir en React una aplicación que funcione como un gestor personal de películas y series.

La aplicación debe permitir al usuario agregar nuevas películas o series, marcarlas como vistas, editarlas y eliminarlas (con confirmación).

Cada ítem debe tener título, director, año, género (usar un select para este campo), rating y tipo (película o serie). 
La aplicación debe mostrar dos listas: una con contenido por ver y otra con contenido visto. 

Debe haber: 
-Un contador que muestre la cantidad total por lista y por género. 
-Un input de búsqueda para filtrar por título o director. 
-Filtros para género y tipo. 
-Opciones de ordenamiento por año y rating, ascendente y descendente. 
-Si no hay ítems en una lista, debe mostrarse un mensaje indicando que está vacía.
-Si no hay resultados que coincidan con los filtros, también debe mostrarse un mensaje adecuado.

Link a la app: https://trabajo-practico-n-1-react-dz9s.vercel.app/

La aplicación permite agregar/editar/eliminar películas o series, mediante un formulario que al presionar el boton de agregar, automaticamente aparece la tarjeta con el item agregado a un lado. Debajo del formulario, hay un "panel" con distintos botones, opciones e información, para elegir la vista (ver todas las películas/series, solo las ya vistas o solo las que no se vieron), para filtrar (por genero o por tipo), para ordenar (de manera ascendente y descendente, por año o rating), y para ver cuantas películas o series se han agregado, cuantas se marcaron como vistas (se hace en la propia tarjeta del item), y cuantas siguen sin ver, además de poder ver cuantos proyectos de cada genero hay guardados. Tambíen hay un buscador, en el cuál se puede ingresar el titulo de un proyecto o el director del mismo para encontrarlo mas facilmente.

Funcionalidad de los archivos principales: 
index.js: Es el punto de entrada principal de la aplicación React. Su función principal es inyectar la aplicación React en el DOM del HTML tradicional. Inicializa y renderiza el componente raiz.

app.js: Es el componente principal de la app, y actúa como el contenedor base de toda la interfaz. Ahí se gestionan los estados, componentes e interacciones.

index.css: Es un archivo CSS tradicional que aplica estilos globales.

package-json.js: Es un archivo de configuración que usa Node.js (y npm), que define las dependencias, scripts y más para la gestión del proyecto.

Instrucciones de instalación:

1- Clonar el repositorio: git clone https://github.com/Thiago-Pollio/Trabajo-Practico-N-1-React.git

2- Acceder al directorio del proyecto: cd Trabajo-Practico-N-1-React

2- Instalar las dependencias del proyecto: npm install

3- Ejecutar la aplicación: npm start


Capturas de pantalla:

![image](https://github.com/user-attachments/assets/5e3ef35e-f6e8-4a4e-8c79-b4cd3c3a394e)

![image](https://github.com/user-attachments/assets/d07d1516-87e2-45a8-9c8a-b479e13b473f)

