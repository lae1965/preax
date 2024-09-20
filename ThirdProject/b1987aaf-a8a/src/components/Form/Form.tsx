import { useState, useEffect, useMemo, useCallback } from 'react';
import useAppSelector from '@/hooks/useAppSelector';
import useAppDispatch from '@/hooks/useAppDispatch';
import useKeyboardShortcut from '@/hooks/useKeyboardShortcut';

import { login } from '@/store/slices/user';

import { Button, Input } from '@/UI';
import { Section } from '../Section';

import clsx from '@/utils/clsx';
import { keyboardShortcuts } from '@/constants';
import { validName, validPassword } from '@/utils';

import styles from './Form.module.css';
import useAgentSystem from '@/hooks/useAgentSystem';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export const Form: React.FC<FormProps> = ({ className, ...otherProps }) => {
	const { loading, error: apiError } = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();

	const os = useAgentSystem();
	useKeyboardShortcut(keyboardShortcuts.altEnter[os].shortcut, () =>
		handleSubmit(),
	);

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [values, setValues] = useState({
		name: '',
		password: '',
	});
	const [errors, setErrors] = useState<{
		name: string | null;
		password: string | null;
	}>({
		name: null,
		password: null,
	});
	const [success, setSuccess] = useState(false);

	const isEmpty = useMemo(
		() => Boolean(Object.values(values).findIndex((item) => item === '') + 1),
		[values],
	);

	const onChange = useCallback((key: keyof typeof values, newValue: string) => {
		setValues((prev) => ({
			...prev,
			[key]: newValue,
		}));
		setSuccess(false);
	}, []);

	const onClean = (key: keyof typeof values) => {
		setValues((prev) => ({
			...prev,
			[key]: '',
		}));
		setSuccess(false);
	};

	const validateInputs = () => {
		const nameError = validName(values.name);
		const passwordError = validPassword(values.password);

		if (nameError !== errors.name || passwordError !== errors.password) {
			setErrors({
				name: nameError,
				password: passwordError,
			});
		}

		return !nameError && !passwordError;
	};

	useEffect(() => {
		if (!isSubmitted) return;
		validateInputs();
	}, [values, isSubmitted]);

	useEffect(() => {
		if (apiError === 'Неверный пароль') {
			setErrors({
				name: 'Пользователь с таким именем уже существует',
				password:
					'Неверный пароль. Проверьте правильность ввода или создайте новый аккаунт',
			});
			setSuccess(true);
		}
	}, [apiError]);

	const handleSubmit = useCallback(
		(e?: React.FormEvent<HTMLFormElement>) => {
			e?.preventDefault();

			if (isEmpty || loading) {
				return;
			}

			if (!validateInputs()) {
				setIsSubmitted(true);
				return;
			}

			dispatch(login(values));
		},
		[isEmpty, loading, validateInputs, dispatch, values],
	);

	return (
		<Section
			title='Добро пожаловать!'
			className={clsx(styles.section, className)}
		>
			<form onSubmit={handleSubmit} className={styles.form} {...otherProps}>
				<Input
					className={styles.input}
					value={values.name}
					onChange={(e) => onChange('name', e.target.value)}
					label='Имя'
					id='name'
					hint='Имя должно начинаться с заглавной буквы, содержать 2-30 символов, без пробелов'
					minLength={2}
					maxLength={30}
					message={errors.name}
					btns
					onClean={() => onClean('name')}
					success={success}
					required
					disabled={loading}
				/>
				<Input
					className={styles.input}
					value={values.password}
					onChange={(e) => onChange('password', e.target.value)}
					id='password'
					label='Пароль'
					type='password'
					hint='Пароль должен содержать 8-30 символов, без пробелов. Минимум 2 цифры и 3 заглавные буквы'
					minLength={8}
					maxLength={30}
					message={errors.password}
					btns
					onClean={() => onClean('password')}
					required
					disabled={loading}
				/>
				<Button
					wrapperClassName={styles.submitBtn}
					type='submit'
					tip={keyboardShortcuts.altEnter[os].hint}
					disabled={loading || isEmpty}
					loading={loading}
				>
					{'Начать'}
				</Button>
			</form>
		</Section>
	);
};
