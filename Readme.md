# Frontend Assignment

## Overview

This project addresses a set of requirements provided as part of the take-home assessment. The solution showcases the ability to design reusable components, manage state effectively using React hooks, and ensure accessibility and performance. The primary features of the project include components like `Button`, `Pagination`, and `Table`, which are designed to be modular and reusable across the application.

The project also includes a custom hook, `useFetchData()`, for fetching data from a JSON file to populate the components dynamically.

## Technologies Used

- **React** (with hooks)
- **CSS** (for styling)
- **Vite** (for faster build and development server)
- **ViTest** (for unit testing)
- **ES6** (for modern JavaScript syntax)

## Setup Instructions

To get this project running locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/mayank-1/frontend-assignment.git
   ```

2. Navigate into the project directory:

   ```bash
   cd frontend-assignment
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   This should start the app locally on `http://localhost:5173/`.

## Features

- **Button Component**: A reusable button component with customizable styles and actions.
- **Pagination Component**: A pagination component that handles navigation through large data sets.
- **Table Component**: A dynamic table that displays data fetched from a JSON file.
- **useFetchData Hook**: A custom React hook that fetches data from a JSON file and provides it to components.
- **Accessibility**: The application is built with accessibility in mind, ensuring proper semantic HTML, ARIA attributes, and keyboard navigability.

## Testing

This project uses **ViTest** for unit and integration tests. To run the tests, use the following command:

```bash
npm test
```
