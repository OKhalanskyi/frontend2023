import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Loader } from 'shared/ui/Loader';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}
export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <div className={classNames(styles.PageLoader, {}, [className])}>
    <Loader />
  </div>
);
