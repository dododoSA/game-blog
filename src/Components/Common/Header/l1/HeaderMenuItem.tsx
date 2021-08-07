import Link from 'next/link';

const HeaderMenuItem = ({ label, path }: { label: string; path: string }) => <Link href={path}>{label}</Link>;

export { HeaderMenuItem };
