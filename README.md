# 🔐 Secure Password Generator using @stdlib/random

This is a simple, secure, and customizable password generator web app that uses [`@stdlib/random` library](https://www.npmjs.com/package/@stdlib/random) to generate random passwords. It features a clean UI (built with Tailwind CSS) and a Node.js + Express backend API.

---

## 🚀 Features

- Generate strong passwords of custom length
- Toggle inclusion of:
  - ✅ Uppercase letters (A-Z)
  - ✅ Numbers (0-9)
  - ✅ Symbols (!@#$%^&)
- Copy to clipboard functionality
- Uses `@stdlib/random/base/uniform` for secure random number generation

---

## 📦 stdlib Module Used

This project uses the [`@stdlib/random/base/uniform`](https://www.npmjs.com/package/@stdlib/random-base-uniform) module to generate secure random integers for indexing characters from the password charset.

```js
const rand = require("@stdlib/random/base/uniform");
const index = rand(0, charset.length - 1);
```
