const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const slackRoutes = require('./routes/slackRoutes');
app.use('/api/slack', slackRoutes);

app.get('/', (req, res) => {
  res.send('Slack Mock API running.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
