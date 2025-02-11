import { useState } from 'react';

function WalletConnector() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        setAccount(accounts[0]);
      } catch (err) {
        console.error('Error connecting wallet:', err);
      }
    } else {
      alert('Please install MetaMask.');
    }
  };

  return (
    <div style={{ margin: '20px 0' }}>
      {account ? (
        <div>Connected: {account}</div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}

export default WalletConnector; 