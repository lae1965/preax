export const API_URL = import.meta.env.VITE_API_URL

export const INPUT_REQUIREMENTS = {
  NAME: 'Имя должно начинаться с заглавной буквы, содержать 2-30 символов, без пробелов',
  PASSWORD:
    'Пароль должен содержать 8-30 символов, без пробелов. Минимум 2 цифры и 3 заглавные буквы'
}

export const REGEXP = {
  NAME: /^[A-ZА-Я][^\s]{1,29}$/,
  PASSWORD: /^(?=(?:.*[A-ZА-Я]){3})(?=(?:.*\d){2})\S{8,30}$/
}

export const ERRORS = {
  INVALID_NAME: 'Имя не соответствует требованиям',
  INVALID_PASSWORD: 'Пароль не соответствует требованиям',
  VALID_NAME_EXISTS: 'Пользователь с таким именем уже существует',
  INVALID_RESPONSE_PASSWORD:
    'Неверный пароль. Проверьте правильность ввода или создайте новый аккаунт',
  ERROR_404: 'Ошибка 404: Запрашиваемый ресурс не найден',
  UNKNOWN_ERROR: 'Неизвестная ошибка'
}

export const ROUTE_PATHS = {
  AUTH: '/',
  MAIN: '/main',
  NOT_FOUND: '/not-found',
  THEMES: '/themes',
  RAITING: 'rating',
  WILDCARD: '*'
}

export const keyboardShortcut = (): string =>
  navigator.userAgent.indexOf('Mac') !== -1 ? 'Option + Enter ↵' : 'Alt + Enter ↵'
