const app = require('./app');
const configs = require('./configs');

app.listen(configs.PORT, 'localhost', () => {
    console.log(`Server started at port ${configs.PORT}`);
});
