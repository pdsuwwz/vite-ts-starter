const toString = Object.prototype.toString

export function isFunction (obj) {
  return typeof (obj) === 'function'
}

export function isObject (obj) {
  return obj === Object(obj)
}

export function isArray (obj) {
  return toString.call(obj) === '[object Array]'
}

export function isDate (obj) {
  return toString.call(obj) === '[object Date]'
}

export function isRegExp (obj) {
  return toString.call(obj) === '[object RegExp]'
}

export function isBoolean (obj) {
  return toString.call(obj) === '[object Boolean]'
}

export function isString (obj) {
  return toString.call(obj) === '[object String]'
}

export function isUndefined (obj) {
  return toString.call(obj) === '[object Undefined]'
}

export function isNull (obj) {
  return toString.call(obj) === '[object Null]'
}

export function isNumberical (obj) {
  return (typeof (obj) === 'number' || typeof (obj) === 'string') && !isNaN(obj - parseFloat(obj))
}
