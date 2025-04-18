# 📚 PagePop - Your Personal eBook Library

**PagePop** is a modern, responsive React application that lets users search for books, view detailed information, and manage their favorite collection. It uses the Google Books API for real-time data and is styled with Tailwind CSS. Redux Toolkit handles the state management to keep your favorite books organized.

---

## 🚀 Live Demo

👉 **[Visit PagePop on Firebase](https://pagepop-ec12f.web.app/)**

---

## ⚙️ Tech Stack

- **React.js (Vite)**
- **Redux Toolkit**
- **Tailwind CSS**
- **React Router DOM**
- **Google Books API**
- **Firebase Hosting**

---

## ✨ Features

- 🔍 Search for books by **title** and **author**
- ❤️ Add and manage **favorite books**
- 📘 View detailed **book info**
- 🎯 Redux-powered **state management**
- 💨 Optimized with **useMemo** and **React.memo**
- 💻 Fully responsive UI for mobile and desktop

---

# PagePop

## Installation and Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/pagepop.git
    cd pagepop
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```
    The app will be available at: [http://localhost:5173](http://localhost:5173)


# PagePop

## Build and Preview
To create and preview the production build:

1. Run the following commands:
    ```bash
    npm run build
    npm run preview
    ```
    ⚠️ Ensure your Redux slices have valid initial states (e.g., items: []) to avoid preview errors.

## Firebase Hosting
This app is hosted on Firebase. To host your own version:

1. Login to Firebase
    ```bash
    firebase login
    ```

2. Initialize Firebase in your project
    ```bash
    firebase init
    ```
    - Choose Hosting
    - Set `dist/` as your public directory
    - Enable Single Page Application mode

3. Deploy to Firebase
    ```bash
    npm run build
    firebase deploy
    ```

## Testing
To run tests (if included):

1. Run the following command:
    ```bash
    npm run test
    ```
    Test cases use React Testing Library for verifying main functionalities.

## Contact
Created by Prathamesh Deshmukh  
For queries, connect at: your-email@example.com

## Live URL
🌐 [https://pagepop-ec12f.web.app/](https://pagepop-ec12f.web.app/)
