import styles from './HomePage.module.css';
import { Header } from '../../app/templates/Header';
import { Logo } from '../../shared/Logo/Logo';
import { ButtonPrime } from '../../shared/ButtonPrime/ButtonPrime';
import { Input } from '../../features/Input/Input';
import { Select } from '../../features/Select/Select';
import { iconsArr } from '../../utils/iconsArr';
import { NotesList } from '../../widgets/NotesList/NotesList';

export function HomePage() {
  return (
    <>
      <Header>
        <div className={styles.leftHeader}>
          <Logo />
          <Input />
          <Select icon={iconsArr[3]} />
        </div>
        <ButtonPrime
          iconName={'pen'}
          text={'Добавить запись'}
          pw={'18px'}
          ph={'20px'}
        />
      </Header>
      <NotesList />
    </>
  );
}
