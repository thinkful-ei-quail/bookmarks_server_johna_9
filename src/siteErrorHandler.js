const config = require('./config.js');

module.exports = ((err, req, res, _next) => {
  const { httpStatus, message } = err;
  const { NODE_ENV } = config;
  if(httpStatus) // these errors are intended for http; always send message
    res.status(httpStatus).send({ message });
  else // generic error messages in production
    res.status(500).send((NODE_ENV === 'dev') ? { message } : { message: 'Internal server error' } );
});