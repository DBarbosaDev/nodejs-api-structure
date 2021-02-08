class ResponsesEmitter {
    constructor(expressResponse) {
        this.expressResponse = expressResponse;

        this.responseObject = {
            sucess: null,
            status: null,
            errorCode: null,
            errorStack: null,
            errorMessage: null,
            data: null
        };
    }

    success(data) {
        this.responseObject = {
            ...this.responseObject,
            sucess: true,
            status: 200,
            data
        };

        return this;
    }

    error(errorCode, errorMessage, errorStack) {
        return this;
    }

    forbidden() {
        return this;
    }

    send() {
        return this.expressResponse.status(this.responseObject.status).json(this.responseObject);
    }
}

module.exports = ResponsesEmitter;
