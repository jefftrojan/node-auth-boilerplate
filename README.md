

# Auth API
An API for user registration and login using express and mongoose

Endpoints
##### <i>Register a new user</i>
POST <b>/auth/register</b>

Registers a new user with the given credentials

`Request`

```json
{
  "username": "john123",
  "password": "password123"
}

```
`username` (string, required): The username of the new user.
`password` (string, required): The password of the new user.

<i>Response</i>
<b>Success
`200 OK`</b>
The user was created successfully.


<b>Failure
`400 Bad Request` </b>

Invalid request body
Username already exists
<hr/>


##### <i> Log in a user </i> 
POST <b>/auth/login</b>

Authenticates a user with the given credentials and returns an access token.

