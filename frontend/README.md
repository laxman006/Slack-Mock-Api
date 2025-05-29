# Slack Mock API Dashboard

This project is a mock API dashboard for Slack, built with a React frontend and a Node.js backend. It serves as a demonstration of how to create a full-stack application that simulates interactions with a Slack-like API.

## Frontend

The frontend is developed using React and provides a user interface for interacting with the mock API.

### Getting Started

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd slack-mock-api-dashboard/frontend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

   The application will be available at `http://localhost:3000`.

### Folder Structure

- `public/`: Contains the static files, including `index.html`.
- `src/`: Contains the React components and styles.
  - `App.js`: Main application component.
  - `components/`: Reusable components.
  - `pages/`: Different pages of the application.
  - `styles/`: CSS styles for the application.

### Components

- **Header**: A component that displays the navigation and branding for the application.
- **Dashboard**: The main view of the application where users can interact with the mock API.

### Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine.

## Backend

For backend setup and usage, please refer to the `backend/README.md` file.