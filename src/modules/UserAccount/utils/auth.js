import Cookie from 'js-cookie'

export function setAutoLogin (val) {
  Cookie.set('autoLogin', val)
}

export function getAutoLogin () {
  return Cookie.get('autoLogin') || '1'
}

export function removeAutoLogin () {
  Cookie.remove('autoLogin')
}
