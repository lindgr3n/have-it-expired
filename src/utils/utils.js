import moment from "moment";

export function calculateExpires(bought, daysValid) {
  const date = moment(bought);
  const expires = date.clone().add(daysValid, "days");
  return expires.format("YYYY-MM-DD");
}

/**
 * Default date is set to today, inject own date for testing
 */
export function daysToExpire(expires, date = null) {
  const todaysDate = date
    ? moment(date).format("YYYY-MM-DD")
    : moment().format("YYYY-MM-DD");
  const expiresDate = moment(expires).format("YYYY-MM-DD");
  return moment(expiresDate).diff(todaysDate, "days");
}
