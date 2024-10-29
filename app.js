const express = require('express');
const db = require('./models');
const moment = require('moment');
const cors = require('cors');
const app = express();
const taskRoutes=require('./route/Taskroute');

app.use(express.json());
app.use('/api',taskRoutes);
app.use(express.json());
const corsOptions = {
    origin: '*',
};
app.use(cors(corsOptions));



module.exports = app;