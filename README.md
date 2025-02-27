# LinkedIn Rooms - MVP Demo

LinkedIn Rooms is a demonstration application allowing recruiters to host real-time virtual networking and recruitment events. This MVP version uses in-memory storage for simplicity while maintaining all core functionality.

## Features

- **Real-time Communication**: Audio, video, and chat communication using WebRTC and WebSockets
- **Resume Sharing**: Upload and share resumes with recruiters
- **Role-based Access**: Host, speakers, and listeners roles with different permissions
- **Resume Filtering**: Filter participants based on skills, experience, and location
- **Geographic Restrictions**: Limit room access to specific regions
- **Private Rooms**: Create private rooms with access codes
- **User Authentication**: Secure authentication using Clerk

## Note on Data Persistence

This MVP uses in-memory storage for demonstration purposes. All data will be lost when the server restarts. This design choice was made to simplify the setup for demonstration purposes.

## Architecture

The application is built with the following technologies:

### Frontend
- React.js
- WebRTC (Simple Peer)
- WebSockets (Socket.IO client)
- Tailwind CSS for styling
- Clerk for authentication

### Backend
- Node.js with Express
- In-memory data store
- WebSockets (Socket.IO server)
- Clerk for authentication

## Project Structure

The project is organized into two main directories:

- `client/`: React frontend application
- `server/`: Node.js backend application

## Prerequisites

- Node.js (v16+)
- npm or yarn
- Clerk account (for authentication)

## Setup and Installation

### Clone the repository

```bash
git clone https://github.com/claudiu-i/LinkedIn_Project.git
cd LinkedIn_Project
```

### Backend Setup

1. Navigate to the server directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on the `.env.example` template:

```bash
cp .env.example .env
```

4. Update the `.env` file with your Clerk API key.

5. Start the development server:

```bash
npm run dev
```

### Frontend Setup

1. Navigate to the client directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on the `.env.example` template:

```bash
cp .env.example .env
```

4. Update the `.env` file with your Clerk publishable key.

5. Start the development server:

```bash
npm start
```

## Docker Deployment

You can deploy the entire application using Docker Compose:

1. Make sure Docker and Docker Compose are installed on your system.

2. Create a `.env` file in the root directory with the required environment variables:

```bash
CLERK_API_KEY=your_clerk_api_key
REACT_APP_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

3. Build and start the containers:

```bash
docker-compose -f docker/docker-compose.yml up -d --build
```

4. The application will be available at:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## User Roles

- **Host**: The creator of the room with full control over participants
- **Speaker**: Users who can share audio, video, and screen
- **Listener**: Users who can only view and listen

## Important Notes for Demonstration

1. **Data Persistence**: All data is stored in-memory and will be lost when the server restarts. This is by design for the MVP demonstration.

2. **Authentication**: While the app uses Clerk for authentication, you'll need to set up your own Clerk account and configure it with the appropriate keys.

3. **Cross-Computer Access**: Users on different computers can join the same room by accessing the deployed application URL (e.g., http://server-ip:3000).

4. **Room Sharing**: To share a room with others, simply share the URL of the room (e.g., http://server-ip:3000/room/[room-id]).