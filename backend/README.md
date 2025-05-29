
# Slack Mock API

## Endpoints

### 1. `GET /api/slack/users.list`
- **Description**: Retrieve a list of users.
- **Response**:
  ```json
  [
      { "id": "U01", "name": "John Doe", "email": "john.doe@example.com" },
      { "id": "U02", "name": "Jane Smith", "email": "jane.smith@example.com" }
  ]

## Folder Structure

- `src/`: Contains the source code for the backend.
  - `app.js`: Entry point for the application.
  - `controllers/`: Contains controller functions for handling business logic.
  - `routes/`: Contains route definitions for the API.
  - `models/`: Contains data models used in the application.

## License
This project is licensed under the MIT License.