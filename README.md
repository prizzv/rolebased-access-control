# NestJS roleased access control Implementation with JWT

This repository contains a NestJS project that implements a Role-Based Access Control (RBAC) using JWT.

## Installation and Setup

Follow these steps to set up and run the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/prizzv/rolebased-access-control.git
   cd rolebased-access-control
2. **Install the Dependencies:**
   ```bash
   npm i
3. **Run the project with the below command:**
   ```bash
   npm run start:dev

#### Endpoints:

1. **Signup:**
   - Endpoint: `POST /auth/local/signup`
   - Description: Creates a new user and returns an access token and a refresh token
   - Request Body: User credentials (email and password). optional fields name, phone
   - Response: JWT tokens (access and refresh).

2. **Signin:**
   - Endpoint: `POST /auth/local/signin`
   - Description: Login a new user.
   - Request Body: User details (email, password).
   - Response: JWT tokens (access and refresh).

3. **Refresh Token:**
   - Endpoint: `POST /auth/refresh`
   - Description: Refreshes the access token using the refresh token.
   - Request Headers: Authorization header with the refresh token.
   - Response: New access and refresh tokens.
4. **Logout**
   -Endpoint: `POST /auth/logout`
   - Description: Logs out a user and removes the refresh token from the users table.
   - Request Headers: Authorization header with the refresh token.
   - Response: success

## Users Resource

### UserController

The `UserController` oversees routes associated with users.

#### Endpoints:

1. **Get All Users:**
   - Endpoint: `GET /user`
   - Description: Only ADMIN users can view this route.
   - Request Headers: Authorization header with the access token.
   - Response: List of user details without the role ADMIN.

## Authentication and Authorization Approach

### Role-Based Access Control (RBAC)

- Users are assigned roles to implement RBAC.
- Access to specific routes is determined by roles, represented as an enum.
- Resource access is finely controlled by guarding routes according to the user's role.
  
## Conclusion

This NestJS project showcases a robust authentication and authorization system employing JWT Strategy and Guards. It facilitates secure user authentication, role allocation, and precise route access control based on user roles. Tailor the implementation to suit your project's unique requirements.
