import { Button, Input } from '@/shared/ui';
import styles from './styles.module.scss';
import { memo, useCallback } from 'react';
import {
  loginActions,
  selectIsLoading,
  selectLoginPassword,
  selectLoginUsername,
} from '@/features/AuthByUsername/model/slice/loginSlice.ts';
import { loginByUsername } from '@/features/AuthByUsername/model/services/loginByUsername.ts';
import {
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib/hooks/reduxHooks.ts';

export interface ILoginFormProps {
  onSuccess: () => void;
}

const LoginForm = memo(({ onSuccess }: ILoginFormProps) => {
  const dispatch = useAppDispatch();

  const username = useAppSelector(selectLoginUsername);

  const password = useAppSelector(selectLoginPassword);

  const isLoading = useAppSelector(selectIsLoading);

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

  const onLoginClick = useCallback(async () => {
    const res = await dispatch(loginByUsername({ username, password }));
    if (res.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, onSuccess, password, username]);

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

export default LoginForm;
