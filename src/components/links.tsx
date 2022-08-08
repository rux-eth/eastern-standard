import Link from '@src/components/link';
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';

import OpenseaIcon from './openseaIcon';

interface LinkFormat {
  href: string;
  component: JSX.Element | string;
}
const defClass: string =
  'cursor-pointer fill-[#dddddd] hover:fill-secondary-main text-[#dddddd] hover:text-secondary-main duration-300';
const defStyle = {};
const allLinks: LinkFormat[] = [
  {
    href: '/',
    component: <a>MERCH</a>,
  },
  {
    href: 'https://www.rumblekongleague.com/club/24-eastern-standard',
    component: <a>RKL</a>,
  },
  {
    href: 'https://discord.gg/VYazqRcnp3',
    component: <FaDiscord />,
  },
  {
    href: 'https://twitter.com/EasternSwagz',
    component: <FaTwitter />,
  },
  {
    href: 'https://www.instagram.com/easternstandard.eth/',
    component: <FaInstagram />,
  },
  {
    href: 'https://opensea.io/EasternStandard',
    component: <OpenseaIcon />,
  },
];

const Links: JSX.Element[] = allLinks.map((val) => (
  <Link key={val.href} href={val.href}>
    <a className={defClass} style={defStyle}>
      {val.component}
    </a>
  </Link>
));
export default Links;
