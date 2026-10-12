const express = require('express');
const { exec } = require('child_process');

const app = express();
app.use(express.json());

// Hardcoded Secrets (Wiz Secret Scanner)
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

// Command Injection (CodeQL SAST)
app.get('/api/v1/system-status', (req, res) => {
  const host = req.query.host || "127.0.0.1";
  exec(`ping -c 1 ${host}`, (error, stdout) => {
    if (error) return res.status(500).json({ error: error.message });
    res.json({ status: "online", output: stdout });
  });
});

app.get('/', (req, res) => {
  res.send('<h1>Storefront API is LIVE</h1>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
