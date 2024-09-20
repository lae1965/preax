import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './AuthPage.module.css';
import { Form } from '../../components';
import { Logo } from '../../components/UI';

interface IAuthPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function AuthPage({ ...props }: IAuthPageProps) {
  return (
    <div className={styles.wrapper} {...props}>
      <Logo className={styles.authPage__logo}/>
      <Form />
    </div>
  );
}

export default AuthPage;
