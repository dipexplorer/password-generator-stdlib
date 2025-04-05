const express = require('express');
const path = require('path');
const discreteUniform = require('@stdlib/random/base/discrete-uniform');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware to parse JSON and serve static files
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Function to generate secure password
function generatePassword(options) {
    const {
        length = 12,
        uppercase = true,
        lowercase = true,
        digits = true,
        special = true,
    } = options;

    const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
    const DIGITS = '0123456789';
    const SPECIAL = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let charset = '';
    if (uppercase) charset += UPPERCASE;
    if (lowercase) charset += LOWERCASE;
    if (digits) charset += DIGITS;
    if (special) charset += SPECIAL;

    if (!charset) {
        throw new Error('At least one character type must be selected.');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randIndex = discreteUniform(0, charset.length - 1);
        password += charset.charAt(randIndex);
    }

    return password;
}

// API Endpoint: POST /api/generate-password
app.post('/api/generate-password', (req, res) => {
    try {
        const options = req.body;
        const password = generatePassword(options);
        res.status(200).json({ password });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
