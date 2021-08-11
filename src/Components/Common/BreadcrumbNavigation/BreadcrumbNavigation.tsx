import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from 'styles/Common/BreadcrumbNavigation/BreadcrumbNavigation.module.scss';

// TODO: ちょっと面倒くさそうなので一旦後回し 後で直しておく
const BreadcrumbNavigation = ({
  paths,
}: {
  paths: {
    href: string;
    label: string;
  }[];
}) => {
  const router = useRouter();
  const breadcrumbs = paths.map((p, index) => (
    <li key={p.label}>
      <Link href={p.href}>
        <a>{p.label}</a>
      </Link>
    </li>
  ));

  return (
    <>
      {router.pathname !== '/' && (
        <div className={styles.container}>
          <ul>{breadcrumbs}</ul>
        </div>
      )}
    </>
  );
};

export { BreadcrumbNavigation };
