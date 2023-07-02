# grupo-Grupo1-backend

# Brain Royale

## Dependencias

- Nodemon es una herramienta de desarrollo que reinicia automáticamente Node.js cuando detecta cambios en los archivos del proyecto.

- Koa es un framework web para Node.js que permite crear aplicaciones web. Facilita el manejo de solicitudes y respuestas sobre el servidor HTTP.

- Dotenv es una biblioteca que carga variables de entorno desde un archivo .env al proyecto. Esto nos permite separar la información de la conexión a la base de datos.

- Pg es un cliente de base de datos PostgreSQL para Node.js. Proporciona una interfaz para conectarse a una base de datos PostgreSQL y realizar consultas y operaciones en ella desde la aplicación.

- Sequelize es una biblioteca de Object-Relational Mapping (ORM) para Node.js. Proporciona una forma sencilla de interactuar con PostgreSQL utilizando objetos y métodos en lugar de escribir las consultas directamente.

Todas las dependencias se encuentran en un archivo package.json, por lo tanto para instalarlas solo se debe ejecutar:

```html
yarn add dependencies
```

## Base de Datos

Para levantar la base de datos se deben seguir los siguientes pasos:

1. Completar archivo .env con usuario y contraseña
```html
PORT = 3000
DB_USERNAME = 
DB_PASSWORD = 
DB_NAME = BrainRoyale
DB_HOST = 'localhost'
```

2. Iniciar base de datos
```html
sudo service postgresql start
```

3. Crear base de datos
```html
create db BrainRoyale_development
```

```html
yarn sequelize-cli model:generate --name User --attributes username:string,password:string
```

```html
yarn sequelize-cli model:generate --name Category --attributes name:string,color:string
```

```html
yarn sequelize-cli model:generate --name Card --attributes category_id:integer,question:string,option_1:string,option_2:string,option_3:string,option_4:string,correct:integer,used:integer
```

```html
yarn sequelize-cli model:generate --name Game --attributes round:integer,winner:integer,finished:integer
```

```html
yarn sequelize-cli model:generate --name Player --attributes user_id:integer,category_id:integer,game_id:integer,position:integer,turn:integer,brain:integer,skip:integer
```

4. Realizar migraciones
```html
yarn sequelize-cli db:migrate       
```

5. Poblar tablas
```html
yarn sequelize-cli db:seed:all
```

6. Acceder base de datos
```html
psql BrainRoyale_development
```

A continuación se presenta el modelo con las tablas y sus atributos:

### User: 

- username: string con nombre de usuario

- password: string con contraseña

### Category: 

- name: string con nombre de la categoria

- color: string con el color que la representa

### Card: 

- category_id: integer con id de la categoria de la pregunta 

- question: string con la pregunta 

- option_1: string con alternativa 

- option_2: string con alternativa  

- option_3: string con alternativa 

- option_4: string con alternativa 

- correct: integer con el número de alternativa correcta 

- used: integer que indica si la tarjeta ha sido usada en la partida (0,1) 

### Game: 

- round: integer con el número de ronda 

- winner: integer con id del jugador ganador

- finished: integer que indica si la partida terminó (0,1) 

### Player 

- user_id: integer con id del usuario que juega 

- category_id: integer con id de la categoria que indica el tipo de jugador 

- game_id: integer con id de la partida en la que está jugador

- position: integer con la posicion en el tablero

- turn: integer que indica si es el turno del jugador (0,1) 

- brain: integer con la cantidad de fichas de cerebro que tiene el jugador 

- skip: integer que indica si el jugador usó la ficha para pasar una pregunta de su categoria (0,1) 

## API Endpoints
 
### Users 

1. GET
- Ruta: http://localhost:3000/users
- Argumentos: Ninguno
- Retorna la información de todos los usuarios.

2. GET
- Ruta: http://localhost:3000/users/:id
- Argumentos: id de User
- Retorna el usuario (User) con el id recibido (id = :id).

3. POST
- Ruta: http://localhost:3000/users
- Argumentos: Ninguno
- Cuerpo: username y password
- Crea el usuario (User) con la información recibida.


### Games

1. GET
- Ruta: http://localhost:3000/games/
- Argumentos: Ninguno
- Retorna un juego (Game) cuya partida aún no ha sido finalizada (finished = 0). Este siempre es único.

2. PUT
- Ruta: http://localhost:3000/games/:id
- Argumentos: id de Game
- Actualiza el juego (Game) del id recibido (id = :id) agregandole una ronda (round += 1).

### Players

Actualmente estos endpoints no están funcionando.

1. GET
- Ruta: http://localhost:3000/players/:game_id
- Argumentos: :game_id de Player
- Retorna el jugador (Player) que participe en el juego recibido (game_id = :game_id) y que sea su turno (turn = 1). Este siempre es único.

2. PUT
- Ruta: http://localhost:3000/players/:id
- Argumentos: id de Player
- Cuerpo: position y turn de player
- Actualiza al jugador (Player) cambiando su posición (position) y turno (turn) por los valores que se reciban. Para solo cambiar el turno puede recibir la posición como un valor nulo.

### Cards

1. GET
- Ruta: http://localhost:3000/cards/:category_id
- Argumentos: category_id de Card
- Retorna la carta (Card) que sea de la categoria recibida (category_id = :category_id) y que no haya sido usada en el juego (used = 0).

2. PUT
- Ruta: http://localhost:3000/cards/:id
- Argumentos: id de Card
- Actualiza como usada (used = 1) la carta (Card) del id recibido (id = :id).

### Categories

1. GET
- Ruta: http://localhost:3000/categories
- Argumentos: Ninguno
- Retorna la información de todas las categorias

## Ejecución

```html
yarn start
```