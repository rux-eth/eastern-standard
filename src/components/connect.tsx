import { useEthers, useLookupAddress } from '@usedapp/core';
import type { FC } from 'react';

const Connect: FC = () => {
  const { active, account, activateBrowserWallet } = useEthers();
  const { ens } = useLookupAddress(account);
  return active && account ? (
    <p
      className="ess-button capped pointer-events-none "
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
    <button className="ess-button capped" onClick={activateBrowserWallet}>
      Connect
    </button>
  );
};
export default Connect;
