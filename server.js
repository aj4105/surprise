const express = require('express');
const path = require('path');

const app = express();
const port = 5500;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// API route for checking if it's birthday time
app.get('/api/check-birthday', (req, res) => {
  const currentDate = new Date();
  const birthdayDate = new Date('YYYY-MM-DDTHH:MM:SS'); // Set the birthday here
  
  if (currentDate >= birthdayDate) {
    res.json({ unlocked: true });
  } else {
    res.json({ unlocked: false, message: 'Not time yet to open the gifts!' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
