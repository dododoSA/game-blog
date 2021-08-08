import styles from 'styles/SideContents/SideCard.module.scss';

const SideCard = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.container}>
    <div className={styles.spacer}>{children}</div>
  </div>
);

export { SideCard };
