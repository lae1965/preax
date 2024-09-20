import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import useAppSelector from '@/hooks/useAppSelector';
import useAppDispatch from '@/hooks/useAppDispatch';
import { IconButton } from '@/UI';
import LogoutIcon from '@/UI/icons/LogoutIcon';
import { logout } from '@/store/slices/user';
import clsx from '@/utils/clsx';
import styles from './profile.module.css';
import { Switch } from '../Switch';

interface ProfileProps extends React.HTMLAttributes<HTMLElement> {}

export const Profile: React.FC<ProfileProps> = ({
	className,
	...otherProps
}) => {
	const name = useAppSelector((state) => state.user.data?.name);
	const dispatch = useAppDispatch();

	const handleLogout = useCallback(() => {
		dispatch(logout());
	}, [dispatch]);

	return (
		<div className={clsx(styles.container, className)} {...otherProps}>
			<div className={styles.profile}>
				<Switch />
				<Link
					to='#'
					className={styles.userLink}
					data-username={name?.[0].toUpperCase()}
				>
					{name}
				</Link>
				<IconButton className={styles.logout} onClick={handleLogout}>
					<LogoutIcon />
				</IconButton>
			</div>
			<button className={styles.burger}>
				<span />
			</button>
		</div>
	);
};
