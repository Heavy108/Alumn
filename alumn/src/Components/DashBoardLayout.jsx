'use client'; // Enables client-side rendering for this layout

import DashBoard from '@/Components/DashBoardNavigation';
import styles from '@/css/DashboardLayout.module.css';
import { useEffect, useState } from 'react';

const DashboardLayout = ({ children }) => {
  const [hydrationReady, setHydrationReady] = useState(false);

  useEffect(() => {
    setHydrationReady(true); // Ensures that client-side content matches server-side rendering
  }, []);

  // Avoid rendering until client-side hydration is ready
  if (!hydrationReady) return null;

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
