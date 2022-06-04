// YYYY-MM-DD
const toJSONLocalDate = (date) => {
  var local = new Date(date)
  local.setMinutes(date.getMinutes() - date.getTimezoneOffset())
  return local.toJSON().slice(0, 10)
}

export default toJSONLocalDate
