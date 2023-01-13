
# Youtube Subscribers backend Project

This project using NodeJS, Express, MongoDB Atlas database, Mongoose and dotenv for setting Environment varialbles and including perticular routes end point in the URL, through this users can access all subscribers,access particular subscriber, add subscriber, delete, update subscriber by perticular IDs.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Javedansari1993/Youtube-Subscriber.git
```

Go to the project directory

```bash
  cd Youtube-Subscriber
```

Install dependencies

```bash
  npm install
```
Create .env file using .env.sample.

Set the environment key DATABASE_URL with you mongoDB connection URL

Start the server

```bash
  npm run start
```


## Quick Start

Node.js module should be installed in your machine befor download the project and run this command

```bash
  npm install
```
Start the server:
```bash
  npm start
```

    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DATABASE_URL`


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## API Reference

#### Get all subscribers

```http
  GET /subscribers
```

#### Get all subscriberChannel and name only

```http
  GET /subscribers/names
```

#### Get single subscriber

```http
  GET /subscribers/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of subscriber to fetch |

#### Add subscriber
```http
  POST /subscribers
```

#### Delete subscriber
```http
  DELETE /subscribers/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of subscriber to delete |

#### Update subscriber
```http
  POST /subscribers/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of subscriber to update |




## Demo
Demo weblink:
https://drive.google.com/file/d/1jYGspRzzJojKfMVnDZwXkXyykVc73r2b/view?usp=sharing

## Features

- Access all subscribers from remotely hoisted database
- Add new subscriber to database
- Access perticular data from database through a specific IDs
- Delete subscriber from the database through a specific IDs
- Update existing subscriber in the database through a specific IDs



## Deployment
Deployment link:
 https://youtube-subscriber-lyart.vercel.app/



## FAQ

#### How to add new subscribers?

Use Postman to add new subscriber in the database.

#### How to delete new subscribers?
Use Postman to Delete subscriber from the database.

#### How to update new subscribers?
Use Postman to update subscriber from the database.

## 🚀 About Me
I'm a full stack developer...Currently learning web 3.O from Almabetter


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Javedansari1993)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/javed-ansari-07a327154/)

## Screenshot
<img width="960" alt="subscriber" src="https://user-images.githubusercontent.com/110160515/211889536-640f4bc2-0447-47e8-b7bb-ac7aff5e0f06.png">
<img width="959" alt="subscriberId" src="https://user-images.githubusercontent.com/110160515/211889608-7ca93778-424d-4dec-811b-fa4f5b93052b.png">
<img width="960" alt="defaultRoutes" src="https://user-images.githubusercontent.com/110160515/211890114-91b26efa-6e80-4a62-bf40-1d14bf879b46.png">
