
# CRUD mysql NodeJS

Simple CRUD API. image upload and update record. file upload with multer module.


## Authors

- [@chandreshpokiya](https://github.com/chandreshpokiya)


## Tech Stack

**Server:** Node, Express


## API Reference

#### Get all Users

```http
  GET /api/user
```
#### Add User

```http
  POST /api/user
```

#### Get single User

```http
  GET /api/user/{{id}}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

#### Delete User

```http
  DELETE /api/user/{{id}}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to delete |

#### Update User

```http
  PATCH /api/user/{{id}}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to update record |




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`
`HOST`
`USER`
`PASSWORD`
`DB_PORT`
`DB_NAME`


## Run Locally

Clone the project

```bash
  git clone https://github.com/chandreshpokiya/node-mysql-multer.git
```

Go to the project directory

```bash
  cd node-mysql-multer
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

