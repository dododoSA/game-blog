import { useRouter } from 'next/router';
import Link from 'next/link';

// TODO: ちょっと面倒くさそうなので一旦後回し 後で直しておく
const BreadcrumbNavigation = () => {
  const router = useRouter();
  const paths = router.pathname.split(/(?=\/)/g);
  let tmp = '';
  const breadcrumbs = paths.map((p) => {
    tmp += p;
    return (
      <Link key={tmp} href={tmp}>
        <a>{tmp}</a>
      </Link>
    );
  });

  return <>{router.pathname !== '/' && <div>{breadcrumbs}</div>}</>;
};

export { BreadcrumbNavigation };
