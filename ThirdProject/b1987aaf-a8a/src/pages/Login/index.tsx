import { Form } from '@/components/Form';
import { Layout } from '@/components/Layout';
import styles from './Login.module.css';

const Login = () => {
	return (
		<Layout className={styles.container}>
			<Form />
		</Layout>
	);
};

export default Login;
