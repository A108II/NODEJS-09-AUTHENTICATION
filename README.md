# Project README

## Project Overview

This project is a basic implementation of user registration and authentication using Node.js and Express. The project allows users to register by providing a username and password, and then authenticate with the registered credentials.

## Table of Contents

1. [Project Structure](#project-structure)
2. [API Endpoints](#api-endpoints)
   - [Register a New User](#register-a-new-user)
   - [Authenticate (Login) a User](#authenticate-login-a-user)
3. [Explanation of Key Files](#explanation-of-key-files)
   - [`register_controller.js`](#register_controllerjs)
   - [`auth_controller.js`](#auth_controllerjs)
   - [`register.js` and `auth.js`](#registerjs-and-authjs)
   - [`server.js`](#serverjs)
4. [Conclusion](#conclusion)

## Project Structure

The project is structured into several key folders and files:

1. **controllers**: Contains the logic for handling user registration and authentication.
    - `register_controller.js`: Handles the registration of new users.
    - `auth_controller.js`: Handles the authentication (login) of users.

2. **routes**: Defines the routes for the registration and authentication endpoints.
    - `register.js`: Sets up the `/register` route.
    - `auth.js`: Sets up the `/auth` route.

3. **model**: Contains the data model for users.
    - `users.json`: Stores user data in JSON format.

4. **server.js**: The main server file that sets up and starts the Express server, and defines the routes.

## API Endpoints

### Register a New User

- **URL**: `/register`
- **Method**: POST
- **Request Body**: JSON
    ```json
    {
        "username": "your_username",
        "password": "your_password"
    }
    ```
- **Responses**:
    - `201 Created`: If the user is successfully registered.
        ```json
        {
            "Success message": "New user with your_username username just created!"
        }
        ```
    - `400 Bad Request`: If the username or password is missing.
        ```json
        {
            "Error message": "Please provide both username and password"
        }
        ```
    - `409 Conflict`: If the username already exists.
        ```json
        {
            "Error message": "User already exists"
        }
        ```

### Authenticate (Login) a User

- **URL**: `/auth`
- **Method**: POST
- **Request Body**: JSON
    ```json
    {
        "username": "your_username",
        "password": "your_password"
    }
    ```
- **Responses**:
    - `200 OK`: If the user is successfully authenticated.
        ```json
        {
            "Successful": "User your_username logged in successfully"
        }
        ```
    - `400 Bad Request`: If the username or password is missing.
        ```json
        {
            "Error message": "Please provide both username and password"
        }
        ```
    - `401 Unauthorized`: If the username or password is incorrect.
        ```json
        {
            "Error": "Unauthorized user"
        }
        ```

## Explanation of Key Files

### `register_controller.js`

- **Function**: Handles the registration of new users.
- **Key Steps**:
    1. Validates that both username and password are provided.
    2. Checks for duplicate usernames in the database.
    3. Hashes the password using bcrypt.
    4. Saves the new user to the users.json file.

### `auth_controller.js`

- **Function**: Handles the authentication of users.
- **Key Steps**:
    1. Validates that both username and password are provided.
    2. Checks if the username exists in the database.
    3. Compares the provided password with the stored hashed password using bcrypt.
    4. Returns an appropriate response based on the authentication result.

### `register.js` and `auth.js`

- **Function**: Define the routes for registration and authentication, respectively.
- **Key Steps**:
    1. Import Express and the relevant controller.
    2. Define the POST route for handling requests.
    3. Export the router.

### `server.js`

- **Function**: Main server file.
- **Key Steps**:
    1. Sets up the Express server.
    2. Defines the middleware and routes.
    3. Starts the server.

## Conclusion

This project demonstrates a simple user registration and authentication system using Node.js, Express, and bcrypt for password hashing.