
module.exports = {
  errorHandel: {
    serverError,
    badRequest,
    contextError,
    resourceNotFound
  }
};

function serverError(err, res) {
  try {
    if (err && err.context) {
      contextError(err, res);
      return;
    }

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

function contextError(errorMap, res) {
  res.status(400).send({ error: errorMap });
}

function resourceNotFound(message, res) {
  sendErrorWithCode(res, 404, message);
}

function sendErrorWithCode(res, code, error) {
  res.status(code).send({ error });
}
