## Oh wow, another to do app! Just what the world needs...


A Basic Todo CRUD Web Application using MongoDB, Express, React and Node.js

## Functionality to add

* User can add a todo item &#x2611;
* User can complete a todo item &#x2611;
* User can uncomplete an item &#x2611;
* User can edit a todo item &#x2611;
* User can delete an item &#x2611;
* Loading message whilst data is fetched from backend &#x2611;
* User can have multiple todo lists
* User can name their todo lists
* User can edit a todo item by double clicking the test


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








