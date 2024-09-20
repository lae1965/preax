export const nameRegExp: RegExp = /^[A-ZА-ЯЁ]{1}[A-Za-zа-яА-ЯёЁ0-9]{0,28}[^\s]$/
export const passwordRegExp: RegExp =
	/^(?=.*[0-9].*[0-9])(?=.*[A-ZА-ЯЁ].*[A-ZА-ЯЁ].*[A-ZА-ЯЁ])[A-Za-zА-ЯЁа-яё0-9]{7,29}[^\s]$/
export const nameEnterError: string = 'Имя не соответствует требованиям'
export const passwordEnterError: string = 'Пароль не соответствует требованиям'
export const nameHint: string =
	'Имя должно начинаться с заглавной буквы, содержать 2-30 символов, без пробелов'
export const passwordHint: string =
	'Пароль должен содержать 8-30 символов, без пробелов. Минимум 2 цифры и 3 заглавные буквы'
export const userAlreadyExist: string =
	'Пользователь с таким именем уже существует'
export const passwordIsMissing: string =
	'Неверный пароль. Проверьте правильность ввода или создайте новый аккаунт'
export const keyboardShortcut = (): string =>
	navigator.userAgent.indexOf('Mac') !== -1
		? 'Option + Enter ↵'
		: 'Alt + Enter ↵'
