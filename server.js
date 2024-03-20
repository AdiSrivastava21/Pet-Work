const express = require('express');
const app = express();
const path = require('path');

// Serve static files (like HTML, CSS, and images)
app.use(express.static('public'));

// Route to handle redirection based on user selection
app.get('/redirect/:userType', (req, res) => {
    const userType = req.params.userType;
    if (userType === 'pet_owner') {
        res.sendFile(path.join(__dirname, 'pet_owner_login.html')); // Redirect to pet owner login page
    } else if (userType === 'pet_lover') {
        res.sendFile(path.join(__dirname, 'pet_lover_login.html')); // Redirect to pet lover login page
    } else {
        res.status(404).send('Page not found');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
