const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb', extended: true }));
app.use(cors());

app.use('/api/v1', require('./routes'));
app.use(function (req, res, next) {
    return res.status(404).json({ error: 'Resource not found' });
  });

const { PORT, HOST } = process.env;
app.listen(PORT, () => console.log(`SERVER RUNNING ON ${HOST}:${PORT}`));

module.exports = app;