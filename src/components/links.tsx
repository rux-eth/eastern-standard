import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';

interface LinkFormat {
  href: string;
  component: JSX.Element;
}
const defStyle = {};

const allLinks: LinkFormat[] = [
  {
    href: '/',
    component: <a>HOME</a>,
  },
  {
    href: 'https://discord.gg/VYazqRcnp3',
    component: <FaDiscord />,
  },
];
const Links: JSX.Element[] = allLinks.map((val) =>
  val.href.startsWith('/') ? (
    <Link key={val.href} href={val.href} style={defStyle}>
      {val.component}
    </Link>
  ) : (
    <a href={val.href} target={'_blank'} rel="noreferrer" style={defStyle}>
      {val.component}
    </a>
  )
);
export default Links;
