# Game Ranking Web App - Requirements

## 1. Project Overview

The Game Ranking Web App is a web application built with Angular that allows users to register, log in, and track their game statistics.  
It integrates with a Phaser-based game and stores user data using Firebase.

The system provides a simple ranking mechanism and user profile view.

---

## 2. Functional Requirements

### Authentication
- The system shall allow users to register using email and password.
- The system shall allow users to log in and log out.
- The system shall maintain user sessions.
- The system shall restrict access to authenticated users only.

### User Profile
- The system shall store a unique user ID.
- The system shall store the user's username.
- The system shall store the user's highest score.
- The system shall store the user's total play time.
- The system shall display the user's profile information.

### Ranking
- The system shall display a global ranking table.
- The ranking shall be sorted by highest score.
- The ranking shall update in real time.
- The system shall allow pagination or limited results (top 10 / top 50).

### Game Integration
- The system shall receive game data (score, time) from the Phaser game.
- The system shall update the user's statistics after each game session.

---

## 3. Non-Functional Requirements

### Usability
- The UI shall be simple and intuitive.
- The application shall be responsive (desktop and mobile).
- The user shall be able to understand the interface without documentation.

### Performance
- The system shall load in less than 3 seconds.
- Database queries shall be optimized.
- The ranking shall update without full page reload.

### Security
- User passwords shall not be stored in plain text.
- Authentication shall be handled by Firebase.
- Users shall not be able to modify other users' data.

### Maintainability
- The code shall follow Angular best practices.
- The project shall use modular components.
- The project shall be version controlled using Git.

---

## 4. Technical Requirements

### Frontend
- Angular 21
- TypeScript
- Angular Material
- Responsive CSS

### Backend / Services
- Firebase Authentication
- Firebase Firestore

### Development Tools
- Angular CLI
- Git & GitHub
- VS Code

---

## 5. Constraints

- No custom backend server.
- No payment systems.
- Free-tier Firebase services only.

---

## 6. Future Enhancements

- Dark mode.
- Deployment with Firebase Hosting.
