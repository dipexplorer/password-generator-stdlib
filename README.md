# 🔐 Secure Password Generator

A secure, customizable password generator with a simple web interface and a Node.js + Express backend powered by [`@stdlib/random`](https://www.npmjs.com/package/@stdlib/random). Generate strong, random passwords with full control over length, character types, and more.

---

## 🚀 Features

- Generate strong, secure passwords instantly
- Customization options:
  - 🔢 Length: 4–128 characters
  - 🔠 Include uppercase letters (A–Z)
  - 🔡 Include lowercase letters (a–z)
  - 🔢 Include numbers (0–9)
  - 🔣 Include symbols (!@#$%^&\* etc.)
- 🔐 Cryptographically secure random generation using `@stdlib/random/base/discrete-uniform`
- 🌐 Web interface + API support

---

## 🌐 Demo (Local Setup)

```bash
git clone https://github.com/dipexplorer/password-generator-stdlib.git
cd password-generator-stdlib
npm install
npm start
Then open: http://localhost:8000
```

## 📦 Tech Stack

```bash
Layer	    Technology
Frontend  	HTML + Tailwind CSS + Vanilla JS
Backend    	Node.js + Express
Randomness	@stdlib/random/base/discrete-uniform
```

## ⚙️ API Usage

```bash
Endpoint: POST /api/generate-password
```

### Request Body:

```bash
{
  "length": 16,
  "uppercase": true,
  "lowercase": true,
  "digits": true,
  "special": true
}
```

### Respond:

```bash
{
  "password": "A$9gD!z03e7L#mT2"
}
```

If no character types are selected, the API returns:

```bash
{
  "error": "At least one character type must be selected."
}
```

## 📌 Stdlib Password Generator Demo

#### This repo shows how you can build a simple, secure password generator using the @stdlib/random library. At its core, it uses the @stdlib/random/base/discrete-uniform function to randomly generate passwords based on user-selected options like length, symbols, numbers, and letter casing.

Here’s what the project covers:

- Using @stdlib/random to safely create strong, random passwords in JavaScript

- A practical example of using @stdlib in a real-world backend app

- A full working example with both frontend and backend components so users can try it out themselves

## 🧠 How It Works

- The user chooses the password settings (length, character types, etc).

- The backend then builds a pool of characters based on those settings.

- Using @stdlib/random/base/discrete-uniform, the app picks random indices to select characters from that pool.

- Once the password is built, it's sent back to the frontend or any connected client.

## 🔬 Why `@stdlib/random/base/discrete-uniform`?

We chose `@stdlib/random/base/discrete-uniform` over `Math.random()` because:

- It provides a uniform distribution over integers
- It offers better control and safety in cryptographic-like scenarios
- It's part of the reliable and well-tested `@stdlib` library

This helps showcase how `@stdlib` provides superior alternatives for common operations.
``

## 📌 Stdlib Password Generator Demo

#### This repo shows how you can build a simple, secure password generator using the @stdlib/random library. At its core, it uses the @stdlib/random/base/discrete-uniform function to randomly generate passwords based on user-selected options like length, symbols, numbers, and letter casing.

Here’s what the project covers:

- Using @stdlib/random to safely create strong, random passwords in JavaScript

- A practical example of using @stdlib in a real-world backend app

- A full working example with both frontend and backend components so users can try it out themselves

## 🧠 How It Works

- The user chooses the password settings (length, character types, etc).

- The backend then builds a pool of characters based on those settings.

- Using @stdlib/random/base/discrete-uniform, the app picks random indices to select characters from that pool.

- Once the password is built, it's sent back to the frontend or any connected client.

### 🔬 Why `@stdlib/random/base/discrete-uniform`?

We chose `@stdlib/random/base/discrete-uniform` over `Math.random()` because:

- It provides a uniform distribution over integers
- It offers better control and safety in cryptographic-like scenarios
- It's part of the reliable and well-tested `@stdlib` library

This helps showcase how `@stdlib` provides superior alternatives for common operations.

## 📁 Project Structure

```bash
password-generator-stdlib/
│
├── public/
│   └── index.html         # Frontend UI
├── server.js              # Express backend & API logic
├── package.json           # Project dependencies
├── .gitignore             # Ignored files
└── README.md              # This file
```

## 🛠️ Installation

# Clone the repository (if you haven't already)

```bash
git clone [https://github.com/dipexplorer/password-generator-stdlib.git](https://github.com/dipexplorer/password-generator-stdlib.git)
cd password-generator-stdlib
```

# Install dependencies

```bash
npm install
```

# Start the server

```bash
npm start
```

**The application will be running at http://localhost:8000.**

Note: The @stdlib/random package should be listed as a dependency in your package.json file. If not, you might need to run npm install @stdlib/random separately.

```bash
npm install @stdlib/random
```

## 🤝 Contribution Guide

We welcome contributions! 🙌

- **Fork the repository**

- **Clone your fork:**

```bash
git clone <your-fork-url>
```

- **Create a new branch:**

```bash
git checkout -b feature/your-feature-name
```

- **Commit your changes:**

```bash
git commit -am "Add new feature"
```

- **Push to your fork:**

```bash
git push origin feature/your-feature-name
```

- **Open a Pull Request** 🎉

## 📜 License

This project is licensed under the MIT License.
Feel free to use, modify, and share this for personal or professional use.

Consider adding a full LICENSE file to your repository for clarity.

## 🙌 Acknowledgements

- stdlib JS – For the secure random number generation
- Tailwind CSS – For the utility-first CSS framework
- Express.js – For the Node.js web application framework
