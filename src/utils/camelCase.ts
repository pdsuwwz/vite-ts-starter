/* eslint-disable no-unused-vars */
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
export function camelize (string: string) {
  if (isNumberical(string)) {
    return string
  }

  string = string.replace(/[-_\s]+(.)?/g, function (match: any, chr: string) {
    return chr ? chr.toUpperCase() : ''
  })

  return string.substr(0, 1).toLowerCase() + string.substr(1)
}

// pascalize('hello_world') -> 'HelloWorld'
export function pascalize (string: any) {
  const camelized = camelize(string)
  return camelized.substr(0, 1).toUpperCase() + camelized.substr(1)
}

function seperateWords (string: string, options?: { separator?: any; split?: any; }) {
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
export function decamelize (string: any, options?: any) {
  return seperateWords(string, options).toLowerCase()
}

function processor(
  convert: { (string: any): any; (string: any, options: any): any; (string: any): any; },
  options: { process: any; }
) {
  const callback = options && 'process' in options ? options.process : options

  if (typeof (callback) !== 'function') {
    return convert
  }

  return function (string: any, options: any) {
    return callback(string, convert, options)
  }
}

function processKeys(
  convert: (arg0: string, arg1: any) => string | number, obj: any[],
  options?: undefined
): any {
  if (!isObject(obj) || isDate(obj) || isRegExp(obj) || isBoolean(obj) || isFunction(obj)) {
    return obj
  }

  let output: any
  // let i = 0
  // let l = 0

  if (isArray(obj)) {
    output = []
    for (const iterator of obj) {
      output.push(processKeys(convert, iterator, options))
    }
  } else {
    output = {}
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
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
export function camelizeKeys (object: any, options?: any) {
  return processKeys(processor(camelize, options), object)
}

/**
 * decamelizeKeys({ attrOne: 'foo', attrTwo: 'bar' }) ->
 * { attr_one: 'foo', attr_two: 'bar' }
 */
export function decamelizeKeys (object: any, options?: any) {
  return processKeys(processor(decamelize, options), object, options)
}

/**
 * pascalizeKeys({ attr_one: 'foo', attr_two: 'bar' }) ->
 * { AttrOne: 'foo', AttrTwo: 'bar' }
 */
export function pascalizeKeys (object: any, options: any) {
  return processKeys(processor(pascalize, options), object)
}

/**
 * pascalizeKeys({ AttrOne: 'foo', AttrTwo: 'bar' }) ->
 * { attr_one: 'foo', attr_two: 'bar' }
 */
export function depascalizeKeys (this: any, ...args: any) {
  return decamelizeKeys.apply(this, args)
}
