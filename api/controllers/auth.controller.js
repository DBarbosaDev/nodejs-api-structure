const { AuthService } = require('../services');
const { ResponsesEmitter } = require('../framework');

module.exports = {
    login: (req, res) => {
        const ResponsesEmitterInstance = new ResponsesEmitter(res);

        return ResponsesEmitterInstance.success({ test: 'hello world' }).send();
    },

    regist: (req, res) => {}
};
