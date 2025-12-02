# 🏪 ATM Mini-Mart: A Minimal E-Commerce Site (Mini-Flipkart Clone)

This project is a minimal, fully functional e-commerce application built using **React.js** for the frontend and **Firebase Authentication** for user management. It adheres to a strict requirement of **minimal file count** and **minimal Firebase burden**, while ensuring core e-commerce features (product viewing, cart management, and user authentication) are working.

## ✨ Features

* **Product Catalog:** Hard-coded products with categories (**Trending**, **Mobile Accessories**).
* **Shopping Cart:** Add, view, and remove items with quantity tracking (managed via **React Context API**).
* **User Authentication:** Secure **Sign In** and **Sign Up** using Firebase Email/Password.
* **Protected Routes:** Pages like Checkout and Profile are protected, requiring a login.
* **Checkout Flow:** Calculates total and links to a secure external payment button (placeholder).
* **Minimal State Management:** Uses `Context.js` to avoid complex state libraries.

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

You need **Node.js** and **npm** installed on your machine.

### 1. Setup and Installation

1.  **Clone the Repository (or create the project structure):**
    ```bash
    # If starting fresh:
    npx create-react-app mini-flipkart
    cd mini-flipkart
    ```

2.  **Install Dependencies:**
    ```bash
    npm install firebase react-router-dom
    ```

3.  **Create File Structure:**
    Ensure your project structure matches the layout defined in the project brief (e.g., `src/firebase.js`, `src/Context.js`, `src/Components/`, etc.).

### 2. Configure Firebase

The Firebase configuration is already integrated into `src/firebase.js`.

**Action Required:**
1.  Go to your Firebase Console and **Enable Email/Password Sign-in** under the Authentication tab.
2.  The existing configuration provided by the developer is:
    ```javascript
    // src/firebase.js configuration snippet:
    const firebaseConfig = {
      apiKey: "AIzaSyByG-z3SoQtpQVbTUqDilACQmAu4IozgT0",
      authDomain: "anuj-tech-mart.firebaseapp.com",
      projectId: "anuj-tech-mart",
      // ... rest of the config
    };
    ```

### 3. Add Assets

Place your logo and product images into the `public/images` folder so they can be accessed correctly by the components (e.g., `/images/atm.jpg`).

* `public/images/atm.jpg` (Logo)
* `public/images/stock-mouse.jpg`
* `public/images/stock-cable.jpg`
* ...and other product images.

### 4. Run the Application

Start the development server:
```bash
npm start
