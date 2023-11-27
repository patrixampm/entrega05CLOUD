Para esta entrega se ha realizado un despliegue manual, utilizando los datos mock de la anterior entrega, entrega04APIREST.
Los pasos han sido los siguientes:
1- He creado una carpeta dist donde se ha generado el código a desplegar en JS.
2- He preparado el bundle en un nuevo repositorio, entrega05CLOUD, con todas las carpetas necesarias y actualizando el package.json.
3- He creado una 'Web Service' en Render, conectando Render con el repo de Github. Las variables de entorno especificadas son las siguientes:
    API_MOCK=true
    AUTH_SECRET=AUTH_SECRET
    CORS_ORIGIN=false
    NODE_VERSION=18.17.1
    STATIC_FILES_PATH=./public
4- He desplegado el proyecto, que se puede ver en el siguiente enlace:
https://manual-deploy-29iv.onrender.com/
