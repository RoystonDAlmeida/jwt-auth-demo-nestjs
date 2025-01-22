# JWT Auth Demo 

## Overview

This project demonstrates an advanced authentication system using JSON Web Tokens (JWT) with NestJS. The application provides a secure way to manage user authentication and authorization, leveraging JWT for access and refresh tokens.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 18 or higher)
- **NestJS CLI**: Install globally using the command:
```bash
npm install -g @nestjs/cli
```

## Installation
- Clone the repository:
```bash
git clone https://github.com/RoystonDAlmeida/jwt-auth-demo-nestjs.git
cd jwt-auth-demo-nestjs
```

- Install the required dependencies:
```bash
npm install
```

- Running the Application
  To run the application in development mode, use the following command:
```bash
npm run start:dev
```

- For production mode, use:
```bash
npm run start:prod
```

## API Endpoints

Authentication Endpoints:

1. POST /auth/login
Description: Authenticates a user and returns an access token.

Request Body:
```json
{
  "email": "user@example.com",
  "password": "your_password"
}
```

2. POST /auth/register
Description: Registers a new user.

Request Body:
```json
{
  "email": "user@example.com",
  "password": "your_password"
}
```

3. Protected Resource Endpoint
GET /admin

Description: Accesses a protected resource that requires an admin role.

Headers: 
```bash
Authorization: Bearer <access_token>
```

4. Refresh Token Endpoint
POST /auth/refresh

Description: Obtains a new access token using a refresh token.

Request Body:
```json
{
  "refreshToken": "your_refresh_token"
}
```

## Usage

1. Start the server.

2. Use Postman or any API client to interact with the endpoints.

3. Authenticate users to receive access tokens for protected routes.

## Testing

- To run unit tests, use:
```bash
npm run test
```

- For end-to-end tests, use:
```bash
npm run test:e2e
```

- To check test coverage, use:
```bash
npm run test:cov
```

## License

This project is licensed under the MIT License. For more details, see the [MIT License](https://opensource.org/licenses/MIT).