# E-commerce comisión 45060
Esta es una aplicación de e-commerce de ropa. Permite la navegación por un catálogo de productos de distintas categorías.

KANT
![](/src/img/logo.png)

Link al proyecto deployado
## Librerías utilizadas
[react-router-dom](https://reactrouter.com/en/main): generación de las rutas de navegación por las diferentes secciones, componentes.

[firebase](https://firebase.google.com/?hl=es): Creación de una base de datos para el almacenamiento de los productos y órdenes de compra. 

[react-spinners](https://www.npmjs.com/package/react-spinners):Utilización de spinners para el estado loading de la app.
### `Funcionalidades del proyecto`
- Navegación por un menú de categorías de productos

- Acceso al detalle de los productos. Selección de cantidad. Funcionalidad "Agregar al carrito"

- Visualización del carrito de compras con los productos seleccionados y el precio total. Posibilidad de vaciar carrito o eliminar un producto.

- Generación de la orden de compra con un id de seguimiento luego del ingreso de los datos del comprador.


### `Pasos para levantar el proyecto en local`

1. Clonar el repositorio
```
git clone https://github.com/RocioFabrykant/Comision45060.git
```
2. Instalar las dependencias
```
npm install
```
3. Correr el proyecto en el navegador
```
npm start
```