# api_prue_sofex

# api_finve_prue

API Finve Prue


Introducción
API Finve Prue es una API diseñada para manejar productos, tiendas, usuarios y carritos de compras. Proporciona endpoints para crear y gestionar estos elementos, así como para iniciar y cerrar sesión.

Configuración
Antes de utilizar la API, asegúrate de tener las siguientes configuraciones:

Asegúrate de tener Node.js version 19.9.0 y npm 
instalados en tu máquina.
Clona este repositorio en tu directorio local.
iniciar  npm run start 
Ejecuta npm install en el directorio raíz del proyecto para instalar todas las dependencias necesarias.
Uso de la API




Crear Producto
URL: http://localhost:4000/createproduct

Método: POST

Body:

 {
 "name" : "new product 1 ",
 "price" : 189.25,
 "img" : "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/cadena-de-oro-de-18k-33483988_1057199_ED.jpg?&op_usm=1.0,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
 "storeId" : "44be0bf6-2209-4176-a3cf-89eb2f46e307"

}

Crea un nuevo producto proporcionando su nombre, precio, imagen y el ID de la tienda a la que pertenece.


Crear Tienda
URL: http://localhost:4000/Store

Método: POST

Body:

 {
    "store" : "new store2",
    "location" : "Almacenes El Sol, Av. Miguel Hidalgo Ote. 107, Centro, 50000 Toluca de Lerdo, Méx."
 }

Crea una nueva tienda proporcionando su nombre y ubicación.

Crear Usuario
URL: http://localhost:4000/users/Create

Método: POST

Body:

 {
    "name" : "new use3 ",
    "email" : "anewu1s1er2@gmail.com",
    "password" : "thenewuseris1"
}

Crea un nuevo usuario proporcionando su nombre, correo electrónico y contraseña.


Carrito de Compras

URL: http://localhost:4000/neworder

Método: POST

Body:

{
  "storeId": "44be0bf6-2209-4176-a3cf-89eb2f46e307",
  "items": [
    {
      "productId": "67358b56-37dd-4b2f-b8f0-1032a5d5f288",
      "quantity": 3
    },
    {
      "productId": "67358b56-37dd-4b2f-b8f0-1032a5d5f288",
      "quantity": 1
    }
  ],
  "totalQty" : 2 ,
  "totalPrice" : 1253.36
  
}
Crea un nuevo carrito de compras especificando el ID de la tienda, los productos y sus cantidades, El id se toma de la sesion actual del usuario , la cantidad total de productos y el precio tota


Inicio de Sesión
URL: http://localhost:4000/auth

Método: POST

Body:

json
Copy code
{
  "email": "anewu1s1er@gmail.com",
  "password": "123456789"
}
Inicia sesión proporcionando el correo electrónico y la contraseña del usuario.


Cerrar Sesión

URL: http://localhost:4000/logout
Método: GET

Cierra la sesión actual.

Nota: El código ha sido diseñado de forma escalable para adaptarse a futuras necesidades y funcionalidades.

Recuerda ajustar las rutas y los datos de ejemplo según tu configuración y requisitos específicos.


Cosas  a Mejora :  implementar  jwt  
                    descripcion de producto o promocion 
                    descripcion de la tienda 