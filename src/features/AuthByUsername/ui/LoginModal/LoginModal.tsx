import { Modal } from '@/shared/ui';
import { Dispatch, FC, SetStateAction } from 'react';
import { LoginForm } from '@/features/AuthByUsername/ui/LoginForm/LoginForm.tsx';

interface IModal {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export const LoginModal: FC<IModal> = ({ isOpen, onClose, className }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={className}>
      <LoginForm />
    </Modal>
  );
};
