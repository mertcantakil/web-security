# Web Security

It's very basic login/register application.

## Tech Stack

- React
- Express.js
- PostgreSQL
- Bcrypt
- Dotenv

## Installation
1- Enter server folder
``` cd server ```

2- Create .env file and set PG connections
``` touch .env```

3- Run this command
``` node index.js ```

4- Add new terminal and enter client folder
``` cd client ```

5- Run this command
``` npm start ```

## Usage
- First of all you can create a new user. Some rules added on frontend side. As you can see the codes on client folder. Then you can login with that user. If user has already same e-mail you must use different e-mail. When you create a new user, user password hased with bcrypt. Also it salted 10 times for security. 

## License

[MT]
