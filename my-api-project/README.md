
## Project Structure
```
my-api-project
├── db
│   └── db.config.js          # MongoDB connection configuration
├── models
│   └── users.models.js       # User model schema
├── controllers
│   └── users.controllers.js   # User controller with sign up and sign in methods
├── middlewares
│   └── users.middlewares.js   # Middleware for token and session verification
├── utils
│   └── users.utils.js         # Utility functions for password hashing and comparison
├── routes
│   └── users.routes.js        # API route definitions
├── .env                        # Environment variables
├── package.json                # NPM package configuration
└── README.md                   # Project documentation   
```

## Features
- **User Registration**: Users can sign up with a unique customer ID and password.
- **User Authentication**: Users can sign in using their customer ID and password, receiving a JWT token for session management.
- **Session Management**: Options for staying online or having a temporary session.
- **Middleware Protection**: Routes are protected by middleware that verifies tokens and sessions.