import {
  isFunction,
  isObject,
  isArray,
  isDate,
  isRegExp,
  isBoolean,
  isNumberical
} from '@/utils/type'

// camelize('hello_world') -> 'helloWorld'
export function camelize (string) {
  if (isNumberical(string)) {
    return string
  }

  string = string.replace(/[-_\s]+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : ''
  })

  return string.substr(0, 1).toLowerCase() + string.substr(1)
}

// pascalize('hello_world') -> 'HelloWorld'
export function pascalize (string) {
  const camelized = camelize(string)
  return camelized.substr(0, 1).toUpperCase() + camelized.substr(1)
}

function seperateWords (string, options) {
  options = options || {}
  const separator = options.separator || '_'
  const split = options.split || /(?=[A-Z])/

  return string.split(split).join(separator)
}

/**
 * decamelize('helloWorld') -> 'hello_world'
 * decamelize('HelloWorld') -> 'hello_world'
 * decamelize('helloWorld', { separator: '-' }) -> 'hello-world'
 */
export function decamelize (string, options) {
  return seperateWords(string, options).toLowerCase()
}

function processor (convert, options) {
  const callback = options && 'process' in options ? options.process : options

  if (typeof (callback) !== 'function') {
    return convert
  }

  return function (string, options) {
    return callback(string, convert, options)
  }
}

/* eslint-disable */
function processKeys (convert, obj, options) {
  if (!isObject(obj) || isDate(obj) || isRegExp(obj) || isBoolean(obj) || isFunction(obj)) {
    return obj
  }

  let output
  let i = 0
  let l = 0

  if (isArray(obj)) {
    output = []
    for (l = obj.length; i < l; i++) {
      output.push(processKeys(convert, obj[i], options))
    }
  } else {
    output = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        output[convert(key, options)] = processKeys(convert, obj[key], options)
      }
    }
  }
  return output
}

/**
 * camelizeKeys({ attr_one: 'foo', attr_two: 'bar' }) ->
 * { attrOne: 'foo', attrTwo: 'bar' }
 *
 * camelizeKeys([{ attr_one: 'foo' }, { attr_one: 'bar' }]) ->
 * [{ attrOne: 'foo' }, { attrOne: 'bar' }]
 */
export function camelizeKeys (object, options) {
  return processKeys(processor(camelize, options), object)
}

/**
 * decamelizeKeys({ attrOne: 'foo', attrTwo: 'bar' }) ->
 * { attr_one: 'foo', attr_two: 'bar' }
 */
export function decamelizeKeys (object, options) {
  return processKeys(processor(decamelize, options), object, options)
}

/**
 * pascalizeKeys({ attr_one: 'foo', attr_two: 'bar' }) ->
 * { AttrOne: 'foo', AttrTwo: 'bar' }
 */
export function pascalizeKeys (object, options) {
  return processKeys(processor(pascalize, options), object)
}

/**
 * pascalizeKeys({ AttrOne: 'foo', AttrTwo: 'bar' }) ->
 * { attr_one: 'foo', attr_two: 'bar' }
 */
export function depascalizeKeys () {
  return decamelizeKeys.apply(this, arguments)
}
