# Pokemon Challenge

La aplicación es una batalla de Pokémon. Cada uno tiene diferentes stats, como ataque y defensa, por ejemplo,
y tenemos que hacerlos batallar entre ellos.

## Objetivos de Backend

1. Implementar migraciones de DB, debe de popularse una tabla con los datos de los pokemon
2. Implementar endpoint para listar todos los pokemon
3. Implementar endpoint para hacerlos batallar
4. Guardar los resultados de las batallas en una tabla

## Objetivos del Frontend

1. Implementar la UI/UX que liste y seleccione los pokemon
2. Implementar la Card del Pokemon que liste los stats
3. Cuando de Inicio a la batalla, se debe escoger automáticamente y aleatoriamente un contrincante diferente y luego mostrar el resultado
4. Implementar Responsividad básica.
5. Conectar con el Backend

## Algoritmo de Batalla

Para el cálculo de la batalla, ten en consideración lo siguiente:

- El pokemon con la velocidad más alta hace el primer ataque, si son iguales, el pokemon con el ataque más alto va primero.
- Para calcular el daño, resta la defensa del ataque (ataque-defensa). La diferencia es el daño. Si el ataque es igual o menor que la defensa el daño es 1.
- El daño lo restas del HP.
- Los pokemon pelearán por turnos. Todos los turnos serán calculados in el mismo request. Es por esto por lo que el endpoint debe retornar la data del ganador en la misma llamada.
- El ganador es el que se reste el HP del enemigo a cero.
- NOTA: como adicional se podría implementar el sistema de tipos, pero no es requerido.

## Tecnología a usar

Backend:

- NestJs
- Typeorm
- Sqlite

Frontend:

- React
- MaterialUI
- Zustand

## Instrucciones para ejecutar la aplicación

Para ejecutar la aplicación, siga los siguientes pasos:

1. Asegúrese de tener Docker abierto.
2. Entre al repositorio del backend `pokemon-back` y cree un archivo `.env` siguiendo el ejemplo dado en `.env.example`
3. Abra una consola desde el mismo repositorio y ejecute los siguientes comandos para instalar dependecias y levantar el proyecto en local:
   
```sh
   npm i
   npm run start
```

4. Entre al repositorio del fronted `pokemon-iu` y cree un archivo `.env` siguiendo el ejemplo dado en `.env.example`
5. Abra una consola desde el mismo repositorio y ejecute los siguientes comandos para instalar dependecias y levantar el proyecto en local:

```sh
npm i
npm run start
```

## Mejoras
- Podria haber creado un mono repo
- Dentro del backend podria haber agregado los tipos en el algoritmo.
- Agregue un archivo `.http` En el cual se pueden testear los endpoints desde el backend sin necesidad de levantar el frontend pero podria haber agregado Swagger tambien.
- En el frontend podria agregar el manejo de rutas o crear una tab para acceder a una lista/tabla con los resultados para implementar dicha funcionabilidad del backend
- Se podria agregar un infinitive scroll en caso de que sean mas pokemons para que la carga de ellos sea en funcion de la demanda
- Se podria agregar un input search para buscar el pokemon por nombre o filtros para hacerlo por tipos, etc
