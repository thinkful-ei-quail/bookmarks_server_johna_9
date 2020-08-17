function throwHttp(err) {
  err.httpStatus = 400;
  throw err;
}

module.exports = (shape, body) => {
  for(const key in shape) {
    const value = body[key];
    const validator = shape[key];
    if(!validator(value))
      throwHttp(Error(`${key} failed validation: ${validator.toString()}`));
    shape[key] = value;
  }
  return shape;
};