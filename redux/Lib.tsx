//encode,decode処理
//deepcopyはたぶん使わないやつ

export function deepcopy(val) {
  return JSON.parse(JSON.stringify(val))
}

export function encodeEmail(val) {
  return val.split(".").join("*")
}
export function decodeEmail(val) {
  return val.split("*").join(".")
}
