const express = require('express');
const path = require('path');
const randu = require('@stdlib/random/base/randu');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Helper function to generate a secure password
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

    if (charset.length === 0) {
        throw new Error('No character types selected');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randIndex = Math.floor(randu() * charset.length);
        password += charset[randIndex];
    }

    return password;
}

// API endpoint
app.post('/api/generate-password', (req, res) => {
    try {
        const options = req.body;
        const password = generatePassword(options);
        res.json({ password });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
