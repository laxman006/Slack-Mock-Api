# Slack Mock API Dashboard

This project is a mock API dashboard for Slack, built with a React frontend and a Node.js backend. It serves as a demonstration of how to create a full-stack application that simulates interactions with Slack's API.

## Project Structure

```
slack-mock-api-dashboard
├── backend
│   ├── src
│   │   ├── app.js          # Entry point for the Node.js backend
│   │   ├── controllers     # Contains business logic for routes
│   │   ├── routes          # Defines API routes
│   │   └── models          # Data models for the application
│   ├── package.json        # Backend dependencies and scripts
│   └── README.md           # Backend documentation
├── frontend
│   ├── public
│   │   └── index.html      # Main HTML file for the React app
│   ├── src
│   │   ├── App.js          # Main component of the React application
│   │   ├── components       # Reusable components
│   │   ├── pages           # Different pages of the application
│   │   └── styles          # CSS styles for the application
│   ├── package.json        # Frontend dependencies and scripts
│   └── README.md           # Frontend documentation
└── README.md               # Root level documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd slack-mock-api-dashboard
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd ../frontend
   npm start
   ```

The application will be available at `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend (or whichever port you configure).

### API Endpoints

Refer to the backend README for a list of available API endpoints and their usage.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.