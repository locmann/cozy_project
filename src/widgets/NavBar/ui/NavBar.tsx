import styles from './styles.module.scss';
import { clsx } from 'clsx';
import { FC, useState } from 'react';
import { Button } from '@/shared/ui';
import { ButtonTheme } from '@/shared/ui/Button/Button.tsx';
import { LoginModal } from '@/features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';

interface INavBar {
  className?: string;
}

export const NavBar: FC<INavBar> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const authUser = useSelector(getUserAuthData);

  if (authUser) {
    return (
      <nav className={clsx(styles.navBar, className)}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={() => setIsOpen(true)}
        >
          Выйти
        </Button>
        <p>Привет, {authUser.username}!</p>
      </nav>
    );
  }

  return (
    <nav className={clsx(styles.navBar, className)}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={() => setIsOpen(true)}
      >
        Войти
      </Button>
      <LoginModal isOpen={isOpen} onClose={setIsOpen} />
    </nav>
  );
};
