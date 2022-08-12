import type { FC, PropsWithChildren } from 'react';

const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="space-y-2 py-2">
      <h3 className="text-center font-Strippy text-6xl text-secondary-main">
        {children}
      </h3>
      <hr className=" opacity-[40%]"></hr>
    </div>
  );
};
export default Title;
