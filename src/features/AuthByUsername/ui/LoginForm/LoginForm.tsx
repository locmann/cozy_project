import { Button, Input } from '@/shared/ui';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from '@/features/AuthByUsername/model/slice/loginSlice.ts';
import { loginByUsername } from '@/features/AuthByUsername/model/services/loginByUsername.ts';
import { getLoginData } from '@/features/AuthByUsername/model/selectors/getLoginData/getLoginData.ts';
import { AppDispatch } from '@/app/providers/StoreProvider';

export const LoginForm = memo(() => {
  const dispatch = useDispatch<AppDispatch>();

  const { username, password, isLoading } = useSelector(getLoginData);

  const onLoginChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onPasswordChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={styles.loginForm}>
      <span className={styles.field}>
        Логин
        <Input className={styles.input} onChange={onLoginChange} />
      </span>
      <span className={styles.field}>
        Пароль
        <Input className={styles.input} onChange={onPasswordChange} />
      </span>

      <Button
        onClick={onLoginClick}
        className={styles.btn}
        disabled={isLoading}
      >
        Войти
      </Button>
    </div>
  );
});
