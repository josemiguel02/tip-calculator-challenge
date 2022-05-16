export function validateFloat(s) {
  let rgx = /^[0-9]*\.?[0-9]*$/
  return s.match(rgx)
}

export function validateInt(s) {
  let rgx = /^[0-9]*$/
  return s.match(rgx)
}
