import styles from './styles.module.scss';
import { clsx } from 'clsx';
import { FC, memo, useCallback, useState } from 'react';
import { Button } from '@/shared/ui';
import { ButtonTheme } from '@/shared/ui/Button/Button.tsx';
import { LoginModal } from '@/features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '@/entities/User';

interface INavBar {
  className?: string;
}

export const NavBar: FC<INavBar> = memo(({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const authUser = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onShowModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const logout = useCallback(() => {
    dispatch(userActions.logoutUser());
  }, [dispatch]);

  if (authUser) {
    return (
      <nav className={clsx(styles.navBar, className)}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={logout}>
          Выйти
        </Button>
      </nav>
    );
  }

  return (
    <nav className={clsx(styles.navBar, className)}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
        Войти
      </Button>
      {isOpen && <LoginModal isOpen={isOpen} onClose={onCloseModal} />}
    </nav>
  );
});
