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

````bash
git clone https://github.com/dipexplorer/password-generator-stdlib.git
cd password-generator-stdlib
npm install
npm start
Then open: http://localhost:8000
````
📦 **Tech Stack**
```bash
**Layer	**      **Technology**
**Frontend**  	HTML + Tailwind CSS + Vanilla JS
**Backend**    	Node.js + Express
**Randomness**	@stdlib/random/base/discrete-uniform
````
⚙️ **API Usage**
```bash
Endpoint: POST /api/generate-password
```
```bash
**Request Body:**
{
  "length": 16,
  "uppercase": true,
  "lowercase": true,
  "digits": true,
  "special": true
}
```
**Respond:**
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
🧠 **How It Works**
The user selects password criteria.

The backend compiles a character set based on selected options.

The @stdlib/random/base/discrete-uniform module is used to securely generate random indices.

Characters are picked randomly from the set to form a secure password.

The generated password is returned to the frontend or API client.


📁** Project Structure**
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

🛠️ **Installation**
# Clone the repository (if you haven't already)
```bash
git clone [https://github.com/dipexplorer/password-generator-stdlib.git](https://github.com/dipexplorer/password-generator-stdlib.git)
cd password-generator-stdlib
```
# **Install dependencies**
```bash
npm install
```
# **Start the server**
```bash
npm start
````
**The application will be running at http://localhost:8000.**

Note: The @stdlib/random package should be listed as a dependency in your package.json file. If not, you might need to run npm install @stdlib/random separately.
```bash
npm install @stdlib/random
````

🤝** Contribution Guide**
We welcome contributions! 🙌

**Fork the repository**

**Clone your fork:**
```bash
git clone <your-fork-url>
````

**Create a new branch:**
```bash
git checkout -b feature/your-feature-name
````

**Commit your changes:**
```bash
git commit -am "Add new feature"
````

**Push to your fork:**
```bash
git push origin feature/your-feature-name
````
**Open a Pull Request** 🎉



📜 **License**
This project is licensed under the MIT License.
Feel free to use, modify, and share this for personal or professional use.

Consider adding a full LICENSE file to your repository for clarity.



🙌 **Acknowledgements**
stdlib JS – For the secure random number generation

Tailwind CSS – For the utility-first CSS framework

Express.js – For the Node.js web application framework

