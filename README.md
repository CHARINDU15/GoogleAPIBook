Here’s a `README.md` file for the **LibroEsfera** project based on the information you provided:

```markdown
# 📚 LibroEsfera

**LibroEsfera** is a global platform for personalized book recommendations, founded in 2025 by passionate book lovers. With a focus on research and a love for books, it offers high-quality, unique suggestions to readers worldwide. Whether you're a casual reader or an avid bibliophile, **LibroEsfera** helps you find your next great read.

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### 📋 Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### 🔧 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/LibroEsfera.git
   ```

2. Navigate to the project directory:
   ```sh
   cd LibroEsfera
   ```

3. Install dependencies for the backend:
    ```sh
    cd backend
    npm install
    ```

4. Install dependencies for the frontend:
    ```sh
    cd ../frontend
    npm install
    ```

### ⚙️ Running the Project

To start the servers:

1. **Start the backend server**:
   ```sh
   cd backend
   npm start
   ```
   The backend server will run on [http://localhost:5000](http://localhost:5000).

2. **Start the frontend development server**:
   ```sh
   cd ../frontend
   npm start
   ```
   The frontend server will run on [http://localhost:3000](http://localhost:3000).

### 🧪 Running Tests

To run the tests, navigate to the frontend directory and run:

```sh
cd frontend
npm test
```

## 📂 Project Structure

### Backend
```
backend/
  ├── .env
  ├── index.js
  ├── package.json
  └── routes/
      └── books.js
```

### Frontend
```
frontend/
  ├── .gitignore
  ├── package.json
  ├── public/
  │   ├── index.html
  │   ├── manifest.json
  │   └── robots.txt
  ├── README.md
  ├── src/
  │   ├── App.css
  │   ├── App.js
  │   ├── App.test.js
  │   ├── components/
  │   │   ├── BookCard.jsx
  │   │   ├── Hero.jsx
  │   │   ├── Loader.jsx
  │   │   └── Navbar.jsx
  │   ├── index.css
  │   ├── index.js
  │   ├── pages/
  │   │   ├── AboutUs.jsx
  │   │   ├── BookDetails.jsx
  │   │   └── Home.jsx
  │   ├── reportWebVitals.js
  │   └── setupTests.js
  └── tailwind.config.js
```

## 🌟 Features

- 📖 **Personalized book recommendations**
- 🔍 **Search for books** using the [Google Books API](https://developers.google.com/books)
- 📚 **View detailed information** about each book
- 🖼️ **Responsive design** with Tailwind CSS



