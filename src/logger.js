/* eslint no-console: off */

const info = (message, arg = "") => {
  if (!isDevelopmentMode()) {
    return;
  }
  console.log(message, arg);
};

function isDevelopmentMode() {
  return process.env.NODE_ENV === "development";
}

export default { info };
