// components/LoadingBar.tsx
import React from 'react';
import styles from '@/styles/Desktop.module.css';

interface LoadingBarProps {
  isLoading: boolean;
}

const LoadingBar: React.FC<LoadingBarProps> = ({ isLoading }) => {
  return (
    <div
      className={`${styles.loadingBarWrapper} ${
        isLoading ? styles.active : ''
      }`}
    >
      <div className={styles.loadingBar} />
    </div>
  );
};

export default LoadingBar;
