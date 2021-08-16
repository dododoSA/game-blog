import styles from 'styles/SideContents/SideCard.module.scss';

const SideCard = ({ children }: { children: React.ReactNode }) => <div className={styles.container}>{children}</div>;

export { SideCard };
