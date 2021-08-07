import { SiteLogo } from 'Components/Common/Header/l1/SiteLogo';
import { HeaderMenu } from 'Components/Common/Header/l2/HeaderMenu';

const Header = () => (
  <header>
    <div>
      <SiteLogo />
    </div>
    <div>
      <HeaderMenu />
    </div>
  </header>
);

export { Header };
