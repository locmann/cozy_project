import { Loader, Modal } from '@/shared/ui';
import { FC, Suspense } from 'react';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const LoginModal: FC<IModal> = ({ isOpen, onClose, className }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={className} lazy>
      <Suspense fallback={<Loader />}>
        <LoginForm onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
