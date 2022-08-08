import NextLink from 'next/link';
import type { FC, PropsWithChildren } from 'react';

export interface LinkProps extends PropsWithChildren {
  href: string;
}
const Link: FC<LinkProps> = ({ children, href }) => {
  return href.startsWith('/') ? (
    <NextLink href={href}>{children}</NextLink>
  ) : (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default Link;
