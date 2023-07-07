# api_prue_sofex

# Proyecto de Control de Horas Laborales

Este proyecto es un sistema de control de horas laborales para empleados. Permite realizar el registro de entrada y salida de los empleados, calcular las horas trabajadas y generar informes de pagos.

## Rutas API

- `/employee`: Ruta para el registro de empleados.
- `/weeks_worked`: Ruta para la gestión de las semanas de trabajo.
- `/payhours`: Ruta para generar informes de pagos de empleados.
- `/check-in-out`: Ruta para registrar la entrada y salida de empleados.
- `/logicaldelete`: Ruta para realizar eliminación lógica de empleados.
- `/editemployee`: Ruta para editar la información de un empleado.

## Casos de Uso

### Registrar Entrada
1. El empleado elige la opción "Registrar Entrada" e introduce su número de identificación.
2. El sistema verifica la existencia del empleado y la semana de trabajo correspondiente a la fecha actual.
3. Si no existe la semana de trabajo, se crea una nueva con la fecha actual.
4. Se registra la hora de entrada del empleado en la base de datos.

### Registrar Salida
1. El empleado elige la opción "Registrar Salida" e introduce su número de identificación.
2. El sistema verifica la existencia del empleado y la semana de trabajo correspondiente a la fecha actual.
3. Se busca el registro de entrada sin salida correspondiente a la semana de trabajo actual.
4. Se calcula la duración total del turno y se actualiza el registro de entrada con la hora de salida y la duración.

### Comenzar Semana
1. El empleado elige la opción "Comenzar Semana".
2. El sistema verifica si ya existe una semana de trabajo activa.
3. Si hay una semana activa, se informa al empleado que ya tiene una semana iniciada.
4. Si no hay una semana activa, se crea una nueva semana de trabajo con la fecha actual.




### Editar Empleado
1. El empleado elige la opción "Editar Empleado".
2. El sistema permite editar el nombre, apellido y salario del empleado en la base de datos.

### Eliminar Empleado
1. El empleado elige la opción "Eliminar Empleado".
2. El sistema realiza una eliminación lógica del empleado, desactivándolo en la base de datos.


### Nota
 El código ha sido diseñado de forma escalable para adaptarse a futuras necesidades y funcionalidades.

Recuerda ajustar las rutas y los datos de ejemplo según tu configuración y requisitos específicos.


### Cosas  a Mejora 
implementar  jwt 



