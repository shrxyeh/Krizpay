import { useState } from 'react';
import dynamic from 'next/dynamic';
import WalletConnector from '../components/WalletConnector';

// Dynamically import the QR reader so it only loads on the client
const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });

function UserPage() {
  const [qrResult, setQrResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setQrResult(data);
      // backend here to process the payment
    }
  };

  const handleError = (err) => {
    console.error('QR Scan Error: ', err);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Dashboard</h1>
      <WalletConnector />
      <div style={{ marginTop: '40px' }}>
        <h2>Scan Payment QR Code</h2>
        <div style={{ maxWidth: 400, margin: 'auto' }}>
          <QrReader 
            delay={300} 
            onError={handleError} 
            onScan={handleScan} 
            style={{ width: '100%' }} 
          />
        </div>
        {qrResult && (
          <div>
            <h3>QR Code Data:</h3>
            <pre>{qrResult}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserPage; 
