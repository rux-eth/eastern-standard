import type { FC, PropsWithChildren } from 'react';

const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h3
      className="text-center font-Strippy text-6xl text-secondary-main"
      style={{
        marginBottom: '1.5rem',
        marginTop: '1.5rem',
      }}
    >
      {children}
    </h3>
  );
};
export default Title;
