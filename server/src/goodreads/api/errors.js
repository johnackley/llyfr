class BadMethodError extends Error {
  constructor(expected, got) {
    super(`Bad response method: expected '${expected}' got '${got}'`); // (1)
    this.name = "BadMethodError"; // (2)
  }
}

module.exports = {
  BadMethodError
}