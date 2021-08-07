import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export { Layout };
