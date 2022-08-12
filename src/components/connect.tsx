import { useEthers, useLookupAddress } from '@usedapp/core';
import type { FC } from 'react';

const Connect: FC = () => {
  const { active, account, activateBrowserWallet } = useEthers();
  const { ens } = useLookupAddress(account);
  return active && account ? (
    <p
      className="white-comp capped pointer-events-none "
      style={{
        opacity: '60%',
        color: 'white',
        background: 'black',
        border: '2px solid white',
      }}
    >
      {ens ?? account}
    </p>
  ) : (
    <button className="white-comp capped" onClick={activateBrowserWallet}>
      Connect
    </button>
  );
};
export default Connect;
