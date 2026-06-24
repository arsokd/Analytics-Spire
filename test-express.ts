import express from 'express';
const app = express();
app.get('*all', (req, res) => res.send('matched'));
app.listen(3001, () => {
  fetch('http://localhost:3001/moringa')
    .then(r => r.text())
    .then(t => console.log('Response:', t))
    .finally(() => process.exit(0));
});
