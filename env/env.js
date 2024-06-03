class Env {
  static get URL() {
    return process.env.BASE_URL || "https://automationexercise.com";
  }

  static get USERNAME() {
    return process.env.EMAIL;
  }

  static get PASSWORD() {
    return process.env.PASSWORD;
  }
}

module.exports = { Env };
