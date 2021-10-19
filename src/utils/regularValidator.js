const validatorPositiveInteger = (rule, value, callback) => {
  if (/(^[1-9]\d*$)/.test(value)) {
    callback()
  } else {
    callback(new Error('请输入正整数'))
  }
}

const validatorMaxCountFunction = (errorMsg = '最多三个', count = 3) => {
  return (rule, value, callback) => {
    if (!value || !value.length) {
      callback(new Error('不能为空'))
    } else if (value.length > count) {
      callback(new Error(errorMsg))
    } else {
      callback()
    }
  }
}

export {
  validatorPositiveInteger,
  validatorMaxCountFunction
}
