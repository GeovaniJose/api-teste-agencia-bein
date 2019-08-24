#api-teste-agencia-bein
----
  API developed to manage ToDos (tasks).

## Installation

1. Git clone the project using https or ssh:

* **https**

```bash
> https://github.com/GeovaniJose/api-teste-agencia-bein.git
```

* **ssh**

```bash
> git@github.com:GeovaniJose/api-teste-agencia-bein.git
```

2. Go to project root folder

```bash
> cd api-teste-agencia-bein
```

3. Run the command to install all project dependencies

```bash
> yarn
```

## Running the app

1. Create the **.env** file based on the **.env.examples** file

2. Now just run the command to start aplication

```bash
> yarn dev
```

3. And open the browser on: **http://localhost:3333**

## Routes

* **Base URL**

  `http://localhost:3333/api`

* **URL endpoints**

  `GET /todos`: Route to list all ToDos in databse;

  `POST /todos`: Route to create ToDos on database, must pass a JSON object with `title` (required) and `comment` (not required) values that represents the title and comment for the todo;

  `GET /todos/:todoId`: Route to show a single ToDo of the database with a single param `todoId` representing todo id;

  `PUT /todos/:todoId`: Route to update a single ToDo of the database with a single param `todoId` representing todo id;

  `DELETE /todos/:todoId`: Route to remove a single ToDo of the databasewith a single param `todoId` representing todo id.
  
*  **URL Params**
  
  `todoId=[integer]`

## License

  [MIT licensed](LICENSE).