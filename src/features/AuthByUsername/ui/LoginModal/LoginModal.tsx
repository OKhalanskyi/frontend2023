import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import styles from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}
export const LoginModal: FC<LoginModalProps> = (props) => {
  const {
    className,
    isOpen,
    onClose,
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(styles.LoginModal, {}, [className])}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};
