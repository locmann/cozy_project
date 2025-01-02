import styles from './Modal.module.scss';
import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  MouseEvent,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { clsx } from 'clsx';
import { Portal } from '@/shared/ui';

interface IModal extends PropsWithChildren {
  className?: string;
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<IModal> = (props) => {
  const { children, isOpen, onClose, className = '' } = props;
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onClose((prev) => !prev);
      setIsClosing(false);
    }, 300);
  }, [onClose]);

  const onContentClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  useEffect(() => {
    const controller = new AbortController();
    if (isOpen) {
      window.addEventListener(
        'keydown',
        (evt) => {
          if (evt.key === 'Escape') {
            closeHandler();
          }
        },
        { signal: controller.signal }
      );
    }

    return () => {
      clearTimeout(timerRef.current);
      controller.abort();
    };
  }, [isOpen, closeHandler]);

  return (
    <Portal domNode={document.body}>
      <div
        className={clsx(className, styles.modal, {
          [styles.opened]: isOpen,
          [styles.isClosing]: isClosing,
        })}
      >
        <div className={styles.overlay} onClick={closeHandler}>
          <div className={styles.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
