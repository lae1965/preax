import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

interface ILayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function Layout({ ...props }: ILayoutProps) {
  return (
    <div className={styles.layout} {...props}>
      <Outlet />
    </div>
  );
}

export default Layout;
