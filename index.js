const Ramda = require("ramda");

const env = Ramda.reduce(
  (acc, [k, v]) => `${acc}${k}=${v}\n`,
  "Final test:\n\n",
  Ramda.toPairs(process.env)
);

module.exports = () => env;
