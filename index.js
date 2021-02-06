const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');

const configs = require('./configs');
const routes = require('./api/routes');

mongoose.connect(
    configs.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (err) => {
        if (err) {
            console.log(err);
            process.exit();
        }

        console.log('Database connection stablished');
    }
);

const app = express();

app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan(configs.RUNNING_MODE));
app.use(mongoSanitize());

app.use('/api', routes);

app.listen(configs.SERVER_PORT, 'localhost', () => {
    console.log(`Server started at port ${configs.SERVER_PORT}`);
});

module.exports = app;
