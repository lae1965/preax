import { REGEXP } from '../constants'

type ValidationType = 'name' | 'password'

export const validateField = (type: ValidationType, value: string): boolean => {
  switch (type) {
    case 'name':
      return REGEXP.NAME.test(value)
    case 'password':
      return REGEXP.PASSWORD.test(value)
    default:
      return false
  }
}
