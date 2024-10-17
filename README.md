# Todo App

## Overview

This Todo App is a simple and efficient tool for managing tasks. Built with Vite and vanilla JavaScript, it allows users to add, complete, delete, and undelete tasks, while providing a real-time display of the current date and time. The app leverages local storage for data persistence, ensuring that your tasks are saved even after refreshing the browser.

## Features

- **Add Tasks:** Easily add new tasks to your to-do list.
- **Complete Tasks:** Mark tasks as complete with a simple click.
- **Delete Tasks:** Remove tasks from the active list and move them to a deleted tasks list.
- **Undelete Tasks:** Restore deleted tasks back to the active list.
- **Date and Time Display:** See the current date and time displayed at the top of the app.
- **Data Persistence:** All tasks are saved in the browser's local storage, so your data is preserved across sessions.

## Technologies Used

- **Vite:** A fast build tool for modern web applications.
- **HTML:** Structure of the application.
- **CSS:** For styling the app.
- **JavaScript:** Core programming language for functionality.

## Getting Started

To run this application locally, follow these steps:

### Prerequisites

- **Node.js** (version 14 or later)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/todo-app.git
Navigate into the project directory:

bash
Copy code
cd todo-app
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open your browser and visit:

arduino
Copy code
http://localhost:5173

## Code Structure
src/: Contains all the source code for the application.
components/: Directory containing reusable components.
Header.js: Displays the header and current date/time.
Tabs.js: Allows filtering of tasks based on their status (All, Completed, etc.).
TodoInput.js: Input field for adding new tasks.
TodoList.js: Displays the list of todos.
TodoCard.js: Represents individual todo items with options to complete, delete, and edit.


## Development Process
1. ### Planning:

Defined the core features needed for the Todo App, focusing on user experience and functionality.

2. ### Setup:

Created a new Vite project using the npm create vite@latest command for a smooth development experience.

3. ### Building Components:

Developed individual components for each part of the application (Header, Todo List, Input Field, etc.).
Implemented state management using vanilla JavaScript and the DOM.

4. ### Adding Functionality:

Implemented functions to handle adding, completing, deleting, and updating tasks.
Utilized local storage to persist data.
5. ### Styling:

Added basic CSS for layout and styling, ensuring a user-friendly interface.
6. ### Testing:

Conducted manual testing to ensure all features worked as expected.
7. ### Final Touches:

Cleaned up code, added comments, and prepared the project for deployment.

## Future Improvements
Implement user authentication to save tasks across devices.
Add a due date feature for tasks.
Introduce categories or tags for better organization.
Improve UI/UX with animations and transitions.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to enhance the functionality or improve the design.


### Instructions for Use
- Replace `https://github.com/yourusername/todo-app.git` with the actual URL of your GitHub repository.
- You can modify the features and sections based on any additional functionalities you may have added or plan to add.

Feel free to adjust any part of the README to better fit your project's specifics or your style! If you have any further questions or need assistance, just let me know!

