const { ResponsesService, AuthService } = require('../services');

module.exports = {
    login: (req, res) => {
        const ResponsesServiceInstance = new ResponsesService(res);

        return ResponsesServiceInstance.success({test: 'hello world'});
    },

    regist: (req, res) => {}
};
