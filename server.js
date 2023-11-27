const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/check', (req, res) => {
  const domain = req.query.domain;

  // Implement your domain availability check logic here
  // For simplicity, let's assume all domains are available
  const isAvailable = true;

  res.json({ available: isAvailable });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
