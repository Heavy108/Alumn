'use client';

import DashBoard from '@/Components/DashBoardNavigation';
import styles from '@/css/DashboardLayout.module.css';

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <DashBoard />
      </div>
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
};

export default DashboardLayout;