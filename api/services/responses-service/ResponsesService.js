class ResponsesService {
    constructor(expressResponse) {
        this.expressResponse = expressResponse;
        this.responseObject = {
            sucess: null,
            errorCode: null,
            errorStack: null,
            errorMessage: null,
            data: null
        };
    }

    success(data) {
        return this.expressResponse.status(200).json(data);
    }

    error(errorCode, errorMessage, errorStack) {}
}

module.exports = ResponsesService;
