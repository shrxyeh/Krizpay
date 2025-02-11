import { useState } from 'react';
import WalletConnector from '../components/WalletConnector';
import QRCode from 'qrcode.react';

function MerchantPage() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('BTC');
  const [qrData, setQrData] = useState('');

  const generateQRCode = () => {
    // Create a JSON string with payment details.
    const data = JSON.stringify({ amount, currency });
    setQrData(data);
    // In production, you might store this transaction and notify your backend.
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Merchant Dashboard</h1>
      <WalletConnector />
      <div style={{ marginTop: '40px' }}>
        <h2>Generate Payment QR Code</h2>
        <div>
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            style={{ marginLeft: '10px' }}
          >
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="USDT">USDT</option>
            <option value="MATIC">MATIC</option>
          </select>
        </div>
        <br />
        <button onClick={generateQRCode}>Generate QR Code</button>
        {qrData && (
          <div style={{ marginTop: '20px' }}>
            <h3>Your Payment QR Code:</h3>
            <QRCode value={qrData} size={256} />
          </div>
        )}
      </div>
    </div>
  );
}

export default MerchantPage; 