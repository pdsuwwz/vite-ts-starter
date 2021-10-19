/* eslint-disable*/

const regexLatAndLng = new RegExp('^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$', 'g')
const regexExtraSpace = new RegExp('\\s+', 'g')
const regexExtraSlash = new RegExp('\\/\\/+', 'g')
const regexEmail = new RegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
// FIXME: safari environment not work!
// const regexExtraColon = new RegExp('(?<=:)\\w+', 'g')
// const regexExtraColon = new RegExp('(:)[\\s\\S]+', 'g')

export {
  regexLatAndLng,
  regexExtraSpace,
  regexExtraSlash,
  regexEmail
  // regexExtraColon
}
