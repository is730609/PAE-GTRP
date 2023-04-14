# API de Administración de Tareas

API desarrollada con Node.js, Express y MongoDB para administrar tareas. Permite crear, listar, actualizar y eliminar tareas.

## Tecnologías y librerías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Swagger UI

## Instalación

1. Clone este repositorio
2. Navegue al directorio del proyecto
3. Instale las dependencias del proyecto:
```npm install```

## Uso

1. Inicie la API ejecutando el siguiente comando:
```node app.js```
2. La API estará disponible en `http://localhost:3000`.
3. 
4. Probar la API utilizando Postman o acceder a la documentación de Swagger en `http://localhost:3000/swagger`.

## Endpoints

- `GET /tareas` - Lista todas las tareas
- `GET /tareas/:id` - Obtiene una tarea específica por ID
- `POST /tareas` - Crea una nueva tarea
- `PUT /tareas/:id` - Actualiza una tarea existente por ID
- `DELETE /tareas/:id` - Elimina una tarea existente por ID
