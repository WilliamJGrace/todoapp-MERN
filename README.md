## Oh wow, another to do app! Just what the world needs...

## My-Todo-Notes


[![Build Status](https://travis-ci.org/WilliamJGrace/todoapp-MERN.svg?branch=master)](https://travis-ci.org/WilliamJGrace/todoapp-MERN)


A Full Stack Todo CRUD Web Application using MongoDB, Express, React and Node.js

## Functionality to add

* User can add a todo item &#x2611;
* User can complete a todo item &#x2611;
* User can uncomplete an item &#x2611;
* User can edit a todo item &#x2611;
* User can delete an item &#x2611;
* Loading message whilst data is fetched from backend &#x2611;
* Add CI/CD &#x2611;
* User can edit a todo item by double clicking the text

Functionality added but not yet deployed:

* User can have multiple todo lists &#x2611;
* User can name their todo lists &#x2611;


[Deployed app on Heroku](https://mytodonotes.herokuapp.com/)


![Screenshot](https://i.imgur.com/GuANmwa.png)

## Set Up

Clone the repository and cd into the root

```
cd client
npm install
cd ..
cd server
npm install
touch .env

```

* For the MongoDB you will need to create a MongoDB Atlas account and create a new cluster.

* Within this cluster create a new database 'todoapp'

* and create a new table 'todoitems'

* Navigate to the clusters section of your dashboard and click 'connect'

* Choose 'connect your application'

* Select Driver 'Node.js' , '3.6 or later'

* Copy the URL

* open up the .env file created earlier which will be in the server directory

```
MONGODB_URL=<COPYURLHERE>
```

Make sure to put in your Username,password and database name

Now, start your server with
```
node index.js
```
in another terminal navigate to client and run
```
npm run dev
```
Now head to local host 8000 and enter your first TodoItem!








