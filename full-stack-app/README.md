# Full Stack Application

This project is a full-stack application that consists of a frontend, backend, and database, all orchestrated using Docker Compose. The application is designed to provide real-time updates and a seamless development experience.

## Project Structure

```
full-stack-app
├── frontend
│   ├── src
│   │   ├── App.js
│   │   └── index.js
│   ├── Dockerfile
│   ├── package.json
│   └── .dockerignore
├── backend
│   ├── src
│   │   ├── server.js
│   │   └── routes
│   │       └── index.js
│   ├── Dockerfile
│   ├── package.json
│   └── .dockerignore
├── database
│   ├── init.sql
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd full-stack-app
   ```

2. Build and run the application using Docker Compose:
   ```
   docker-compose up --build
   ```

### Development

- The frontend is set up to run in watch mode, allowing for real-time updates as you make changes to the code.
- The backend also supports hot reloading for a smooth development experience.

### Accessing the Application

- The frontend will be available at `http://localhost:3000`.
- The backend API can be accessed at `http://localhost:5000/api`.

### Database Initialization

- The database will be initialized with the schema and seed data defined in `database/init.sql`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.