# Front End Challenge (GBM)

Este repositorio contiene el código del challenge propuesto por GBM para la posición "Front End Engineer".

Su desarrollo está basado en el framework React y fue creado a través de la herramiento Vite.

## Ejecución del proyecto en ambiente local

1.  **Clonar el repositorio e instalación de módulos**

    Para clonar el repositorio del proyecto, se debe ejecutar el comando ***git clone*** con la URL donde se encuentra el repositorio:
 
    ```shell
    git clone https://github.com/diana-delarosa/GBM-challenge.git
    ```

    Si se ha clonado el repositorio de manera correcta, entonces se debe mover al directorio del proyecto: 

    ```shell
    cd GBM-challenge/
    ```

    El proyecto cuenta con el archivo *package.json* donde se ha configurado la información que requiere el proyecto para instalar los módulos que se han integrado en el uso de la aplicación web. Para realizar la instalación de estos módulos, se debe ejecutar el siguiente comando:

    ```shell
    npm install
    ```

1.  **Iniciar desarrollo y ver el sitio localmente**
    
    Esta aplicación requiere de claves o credenciales privadas (variables de entorno), las cuales deberán ser solicitadas y guardadas en la raíz del proyecto en un archivo ".env".

    Una vez guardadas las variables de entorno, para dar inicio al modo de desarrollo se ejecuta el siguiente comando:

    ```shell
    npm run dev
    ```

    *Este comando inicia un servidor de desarrollo, donde se puede ver e interactuar con la aplicación en un entorno de desarrollo local. Es importante verificar que la aplicación se haya ejecutado en el puerto 5173 para poder tener autorización de los servicios externos implementados. *