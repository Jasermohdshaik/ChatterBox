 Chatterbox - Real-Time Chat Application

Chatterbox is a real-time chat application built with **React**, **Express**, and **Socket.io**. It allows users to join specific chat rooms and send messages that are instantly broadcasted to others in the same room.

## Features

- Real-time messaging
- Join specific chat rooms
- Smooth and responsive UI
- Room-based messaging using Socket.io
- Supports multiple users simultaneously

## Tech Stack

- **Frontend**: React, CSS (custom styling)
- **Backend**: Express.js, Socket.io
- **Styling**: Custom CSS with responsiveness
- **Real-time Communication**: Socket.io
- **Development Tool**: Nodemon (for automatic server restarts)

## Installation

To run the application locally, follow the steps below:

### Prerequisites

- **Node.js** (v14 or later)
- **npm** (v6 or later)

### Clone the Repository

```bash
git clone https://github.com/your-username/chatterbox.git
cd chatterbox
```

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
   The server will start on `http://localhost:3001`.

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm start
   ```
   The app will run on `http://localhost:3000`.

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Enter a username and a room ID to join a chat room.
3. Start chatting in real-time with anyone in the same room.

## Project Structure

```bash
├── backend               # Backend server files
│   ├── index.js          # Express and Socket.io setup
│   └── package.json      # Backend dependencies
└── frontend              # Frontend React app
    ├── public            # Public assets and index.html
    ├── src
    │   ├── components    # React components (Chat, App, etc.)
    │   ├── App.js        # Main entry point
    │   ├── index.js      # ReactDOM rendering
    │   └── App.css       # Custom CSS styling
    └── package.json      # Frontend dependencies
```

## Scripts

### Backend

- `npm start`: Starts the Express server with Nodemon

### Frontend

- `npm start`: Runs the React development server

## Future Enhancements

- Implement user authentication
- Add private messaging
- Improve UI for mobile devices
