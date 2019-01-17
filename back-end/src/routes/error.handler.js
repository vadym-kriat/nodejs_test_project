
module.exports = {
  errorHandel: {
    serverError,
    badRequest,
    resourceNotFound
  }
};

function serverError(err, res) {
  try {
    if (err && err.errorCode === 400) {
      badRequest(err.message, res);
      return;
    }

    sendErrorWithCode(res, err.errorCode || 500, err.message);
  } catch (error) {
    sendErrorWithCode(res, 500, error.message);
  }
}

function badRequest(message, res) {
  sendErrorWithCode(res, 400, message);
}

function resourceNotFound(message, res) {
  sendErrorWithCode(res, 404, message);
}

function sendErrorWithCode(res, code, error) {
  res.status(code).send({ error });
}
