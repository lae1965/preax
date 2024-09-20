export const API_URL = import.meta.env.VITE_API_URL;

export const RESOURCES = {
  AUTH: '/3-quiz/auth',
  THEMES: '/3-quiz/themes',
};

export const REGEXP = {
  NAME: /^[A-ZА-Я]\S{1,29}$/g,
  PASSWORD: /^(?=.*[A-ZА-Я].*[A-ZА-Я].*[A-ZА-Я])(?=.*\d.*\d)[/^\S]{8,30}$/g,
};

export const INPUT_DESCRIPTION = {
  NAME: 'Имя должно начинаться с заглавной буквы, содержать 2-30 символов, без пробелов',
  PASSWORD:
    'Пароль должен содержать 8-30 символов, без пробелов. Минимум 2 цифры и 3 заглавные буквы',
};

export const ERROR_MESSAGE = {
  INVALID_NAME: 'Имя не соответствует требованиям',
  INVALID_PASSWORD: 'Пароль не соответствует требованиям',
  RESPONSE_VALID_NAME: 'Такой пользователь уже существует',
  RESPONSE_INVALID_PASSWORD:
    'Неверный пароль. Проверьте правильность ввода или создайте новый аккаунт',
  ERROR_404: 'Ошибка 404: Запрашиваемый ресурс не найден',
  SERVER_ERROR: 'Неизвестная ошибка, попробуйте еще',
};

export const KEYBOARD_SYSTEM_HOTKEY = {
  WINDOWS: 'Alt + Enter ↵',
  MAC: 'Option + Enter ↵',
};
