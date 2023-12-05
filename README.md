Para esta entrega se han realizado 3 despliegues diferentes: 

1- Un despliegue manual, utilizando los datos mock de la anterior entrega, entrega04APIREST.
Los pasos han sido los siguientes:
- He creado una carpeta dist donde se ha generado el código a desplegar en JS.
- He preparado el bundle en un nuevo repositorio, entrega05CLOUD, con todas las carpetas necesarias y actualizando el package.json.
- He creado una 'Web Service' en Render, conectando Render con el repo de Github. Las variables de entorno especificadas son las siguientes:
    API_MOCK=true
    AUTH_SECRET=AUTH_SECRET
    CORS_ORIGIN=false
    NODE_VERSION=18.17.1
    STATIC_FILES_PATH=./public
- He desplegado el proyecto, que se puede ver en el siguiente enlace:
https://manual-deploy-29iv.onrender.com/

2- Un despliegue utilizando una base de datos en Mongo Atlas, donde previamente se había insertado los mismos datos que usamos en el anterior despliegue (datos mock).
Los pasos han sido los siguientes:
- He creado un cluster gratuito en Mongo Atlas. Al realizar la conexión Mongo ha generado un string que hemos usado para añadir datos a la base de datos y más tarde conectar con Render.
- He insertado los datos en la BBDD usando los console runners de nuestra aplicación back.
- He creado una nueva 'Web Service' en Render conectado al repositorio de esta entrega. Las variables de entorno son las mismas que en el ejercicio anterior, excepto:
API_MOCK=false
- He desplegado el proyecto, que se puede ver en el siguiente enlace:
https://mongodb-deploy.onrender.com/

3- Un despliegue automático usando datos mock, un Dockerfile y Render.
Los pasos han sido los siguientes:
- He creado un Dockerfile, donde he dado todas las instrucciones necesarias para que Render pueda desplegar automáticamente la aplicación usando datos mock.
- En vez de partir de este repositorio (donde se encuentra este README), se ha desplegado de manera automática a partir de una rama nueva del repositorio usado para la entrega 04-APIREST.
- En Render las variables de entorno que se han introducido son las siguientes:
    API_MOCK=true
    AUTH_SECRET=AUTH_SECRET
    SATIC_FILES_PATH=./public
- He desplegado el proyecto, que se puede ver en el siguiente enlace:
https://auto-deploy.onrender.com/